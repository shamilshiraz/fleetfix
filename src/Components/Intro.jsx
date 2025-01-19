import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useSpring, AnimatePresence } from 'framer-motion';

export default function Intro() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ['./truck.jpg', 'truck2.webp', 'forklift.webp'];
    const text1 = ['Fleets', 'Spare'];
    const text2 = ['fix', 'Parts'];
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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change every 5 seconds to match the animation duration

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [images.length]);

    return (
        <div id='mission' className='h-screen overflow-hidden font-beb'>
            <motion.div ref={container} style={{ y }} className='relative h-full'>
                <motion.img
                    src={images[currentIndex]}
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.5] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 5, // Matches the interval duration
                        ease: 'linear',
                    }}
                    alt="image"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col items-center bg-opacity-50 p-10 mt-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="m-3"
                            >
                                <p className="text-7xl sm:text-8xl font-bold text-white">
                                    {text1[currentIndex % text1.length]}
                                    <span className='text-red-600'> {text2[currentIndex % text2.length]}</span>
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

