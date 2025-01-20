import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next';

function About() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  // Rotate right on scrolling down and left on scrolling up
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 3600]);
    const { t } = useTranslation();
  
  return (
    <div id='about' className='h-[] bg-black text-white py-5 w-full grid place-content-center '>
<div className=" sm:p-40 mt-10 px-4 flex flex-col justify-center items-center">
    <p data-aos="fade-up" className='text-8xl'>{t('about.ab')} <span className='text-red-600'>{t('about.us')} </span> </p>
    <p data-aos="fade-up"
    data-aos-duration="1600"
     className='sm:text-3xl text-2xl leading-loose tracking-wide py-10 text-center'>
    {t('about.para')} </p>
                            <motion.img
                                className='h-[10vh] m-20'
                                src="./bolt.webp"
                                alt="Rotating Bolt"
                                initial={{ rotate: 0 }}
                                style={{ rotate }}                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            />
</div>
    </div>
  )
}

export default About
