import React, { useRef } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

export default function Intro() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start'],
    });

    // Create a smooth animation using useSpring for the y transform
    const y = useSpring(useTransform(scrollYProgress, [0, 1], ["0vh", "110vh"]), {
        stiffness: 100,
        damping: 10,
        mass: 1,
    });

    return (
        <div id='mission' className='h-screen overflow-hidden font-beb'>
            <motion.div ref={container} style={{ y }} className='relative h-full'>
                <img 
                    src={'./truck.jpg'} 
                    alt="image" 
                    className="absolute inset-0 h-full w-full object-cover" 
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col items-center bg- bg-opacity-50 p-10 mt-20">
                        <div className="p-8 m-3">
                            <p className="text-5xl sm:text-8xl font-bold text-white">best spare parts <span className='text-red-600'>In town</span></p>
                        </div>
                        <motion.img
                            className='h-[10vh] mt-4'
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
