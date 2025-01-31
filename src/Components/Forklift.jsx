import { t } from 'i18next'
import React from 'react'
function Forklift() {

  return (
    <div className='h-[]  flex my-20 flex-col justify-around items-center'>
            <div className="text-center ">
        <p data-aos="fade-up" className='text-7xl'>{t('ppara.forklift')}<span className='text-red-600'>.</span></p>
      </div>
      <div className="">
        <img src="./forkb.webp" alt="forklift image" />
      </div>
      <div className="">
        <p className='sm:text-3xl text-2xl leading-loose tracking-wide py-10 sm:px-40 text-center'>
{t('ppara.forkpara')}        </p>
      </div>
   </div>
  )
}

export default Forklift
