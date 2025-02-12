import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useSpring, AnimatePresence } from 'framer-motion';
import { t } from 'i18next';

export default function Intro() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = ['./truck.webp', 'forklift.webp', 'truck2.webp'];
    const container = useRef();

    // Improved scrolling smoothness
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'], // Smooth transition throughout the section
    });

    const y = useSpring(useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]), {
        stiffness: 60, // Lower stiffness for more fluid motion
        damping: 20,   // Higher damping for a more controlled stop
        mass: 0.8,     // Reduces jerky acceleration
    });

    useEffect(() => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div id="mission" className="relative h-screen w-full overflow-hidden">
            <motion.div ref={container} style={{ y }} className="absolute top-0 left-0 w-full h-full">
                <AnimatePresence mode="popLayout">
                    {images.map((src, index) => (
                        index === currentIndex && (
                            <motion.img
                                key={src}
                                src={src}
                                initial={{ opacity: 0, scale: 1 }}
                                animate={{ opacity: 1, scale: 1.2 }} // Slightly reduced scale for a smoother effect
                                exit={{ opacity: 0 }}
                                transition={{
                                    opacity: { duration: 2, ease: 'easeInOut' }, 
                                    scale: { duration: 4, ease: 'easeInOut' }, // Slower zoom for smoothness
                                }}
                                alt="image"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        )
                    ))}
                </AnimatePresence>

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col items-center bg-opacity-50 p-10">
                        <p className="text-7xl sm:text-8xl font-bold text-white">
                            {t('mission.fleets')}
                            <span className="text-red-600"> {t('mission.fix')}</span>
                        </p>
                        <p className="text-white text-md">{t('mission.sp')}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
