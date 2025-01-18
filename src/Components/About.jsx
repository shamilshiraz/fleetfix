import { motion } from 'framer-motion';
import React from 'react'
import { useTranslation } from 'react-i18next';

function About() {

    const { t } = useTranslation();
  
  return (
    <div id='about' className='h-[] bg-black text-white py-5 w-full grid place-content-center'>
<div className=" sm:p-40  px-4 flex flex-col justify-center items-center">
    <p data-aos="fade-up" className='text-8xl'>{t('about.ab')} <span className='text-red-600'>{t('about.us')} </span> </p>
    <p data-aos="fade-up"
    data-aos-duration="1600"
     className='sm:text-3xl text-2xl leading-loose tracking-wide py-10 text-center'>
    {t('about.para')} </p>
                            <motion.img
                                className='h-[10vh] mt-20'
                                src="./bolt.png"
                                alt="Rotating Bolt"
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                            />
</div>
    </div>
  )
}

export default About
