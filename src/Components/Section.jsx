import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Section() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

    return (
        <div
            ref={container}
            className="relative flex items-center justify-center h-screen overflow-hidden"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            {/* Centered div with 70% width and height on top of the image */}
            <div className="absolute flex items-center justify-center w-[80vw] h-[70vh] z-10">
                <div className="bg-white h-full w-full p-6 rounded-md shadow-lg font-beb grid place-content-center text-center">
                    {/* Your content goes here */}
                    <p className='text-6xl'>our <span className='text-red-600'>Mission</span></p>
                    <p className='text-3xl py-5'> Our mission is to ensure your trucks stay operational and efficient with reliable and durable spare parts. Our knowledgeable team is always ready to assist you in finding the right parts to your requirements.</p>

                </div>
            </div>

            <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
                <motion.div style={{ y }} className="relative w-full h-full">
                    <img
                        src={'./bg.jpg'}
                        alt="background"
                        style={{
                            objectFit: "cover",
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: 0,
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
}
