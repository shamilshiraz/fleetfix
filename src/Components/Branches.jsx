import { t } from 'i18next';
import React, { useState, useEffect } from 'react';

function Branches() {
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex % 8) + 1);
    }, 300); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div id='branches' className='h-[] w-full flex flex-col justify-center items-center my-[10vh] text-center'>
      <div className="h-[] w-full">
        <p className='text-7xl' data-aos="fade-up"
    data-aos-duration="1000">{t('branches.h1')} <span className='text-red-600'>{t('branches.h2')} </span></p>
        <p data-aos="fade-up"
    data-aos-duration="1600" className='text-center py-10 sm:px-40 px-3 text-3xl tracking-wide'>
{t('branches.para')}
        </p>
        <div data-aos="fade-up"
    data-aos-duration="1600" className="address1 border border-black p-5 w-[300px] text-2xl sm:w-[500px] flex flex-col justify-center items-center my-6 mx-auto">
          <p>{t('branches.a1n')}</p>
          <p>{t('branches.a1s')}</p>
          <p>{t('branches.a1d')}</p>
        </div>
        <div data-aos="fade-up"
    data-aos-duration="1600" className="address2 border border-black p-5 w-[300px] text-2xl sm:w-[500px] flex flex-col justify-center items-center mx-auto">
          <p>{t('branches.a2n')}</p>
          <p>{t('branches.a2s')}</p>
          <p>{t('branches.a2d')}</p>
        </div>
      </div>
      <div className='py-40'>
        <img src={`./${imageIndex}.png`} alt={`Branch ${imageIndex}`} className='h-[20vh]' />
      </div>
    </div>
  );
}

export default Branches;
