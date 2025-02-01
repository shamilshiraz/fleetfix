import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useSpring, AnimatePresence } from 'framer-motion';



const words = ["trucks", "fleets", "forklifts"];


export default function Intro() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ['./truck.webp', 'forklift.webp', 'truck2.webp'];
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start'],
    });
    
    const y = useSpring(useTransform(scrollYProgress, [0, 1], ["0vh", "110vh"]), {
        stiffness: 100,
        damping: 10,
        mass: 1,
    });

    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 2000); // Change word every 2 seconds
  
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change every 5 seconds to match the animation duration

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [images.length]);

    return (
        <div id='mission' className='h-screen overflow-hidden font-beb'>
            <motion.div ref={container} style={{ y }} className='relative h-full'>
                <motion.img
                    src={images[currentIndex]}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.3] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 2, // Matches the interval duration
                        ease: 'linear',
                    }}
                    alt="image"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col items-center bg-opacity-50 p-10 mt-10">

                                <p className="text-7xl sm:text-8xl font-bold text-white">
                                    Fleets
                                    <span className='text-red-600'> fix</span>
                                </p>
                                <p className="text-white text-md">
      Your trusted partner for{" "}
      <span className="text-red-600 transition-opacity duration-500">
        {words[index]}
      </span>{" "}
      spare parts
    </p>                    </div>
                </div>
            </motion.div>
        </div>
    );
}

