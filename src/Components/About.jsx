import React from 'react'
import { useTranslation } from 'react-i18next';

function About() {

    const { t } = useTranslation();
  
  return (
    <div className='h-[] py-5 w-full grid place-content-center'>
<div className="font-beb sm:p-40  px-4 flex flex-col justify-center items-center">
    <p className='text-8xl'>{t('about.ab')} <span className='text-red-600'>{t('about.us')} </span> </p>
    <p className='sm:text-3xl text-2xl leading-loose tracking-wide py-10 text-center'>
    {t('about.para')} </p>
</div>
    </div>
  )
}

export default About
