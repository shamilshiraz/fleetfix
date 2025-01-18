import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useSpring, AnimatePresence } from 'framer-motion';

export default function Intro() {
    const [currentImage, setCurrentImage] = useState(0);
    const [currentText, setCurrentText] = useState(0);
    const images = ['./truck.jpg', 'truck2.webp', 'truck3.jpg'];
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
        const imageInterval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 4950); // Change image every 4.95 seconds

        return () => clearInterval(imageInterval); // Clear interval on component unmount
    }, []);

    useEffect(() => {
        const textInterval = setInterval(() => {
            setCurrentText((prevText) => (prevText + 1) % text1.length);
        }, 4950); // Change text every 4.95 seconds

        return () => clearInterval(textInterval); // Clear interval on component unmount
    }, []);

    return (
        <div id='mission' className='h-screen overflow-hidden font-beb'>
            <motion.div ref={container} style={{ y }} className='relative h-full'>
                <motion.img 
                    src={images[currentImage]} 
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.2] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 5, // Matches the image switch interval
                        ease: 'linear',
                    }}
                    alt="image" 
                    className="absolute inset-0 h-full w-full object-cover" 
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col items-center bg-opacity-50 p-10 mt-20">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentText}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="m-3"
                            >
                                <p className="text-7xl sm:text-8xl font-bold text-white">
                                    {text1[currentText]} <br className='sm:hidden'/> 
                                    <span className='text-red-600'>{text2[currentText]}</span>
                                </p>
                            </motion.div>
                        </AnimatePresence>
                        <motion.img
                            className='h-[10vh]'
                            src="./bolt.png"
                            alt="Rotating Bolt"
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
