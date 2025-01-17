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
    <div className='h-[] w-full flex flex-col justify-center items-center font-beb my-[10vh] text-center'>
      <div className="h-[] w-full">
        <p className='text-7xl'>Our <span className='text-red-600'>Branches</span></p>
        <p className='text-center py-5 text-2xl'>
          We currently have two branches, one in Dammam and another in Riyadh, both strategically positioned to serve our customers with exceptional convenience and service. Our Dammam branch caters to the Eastern Province, while the Riyadh branch provides top-notch service in the capital. At both locations, we are dedicated to delivering an outstanding customer experience.
        </p>
        <div className="address1 border border-black p-5 w-[300px] text-2xl sm:w-[500px] flex flex-col justify-center items-center my-6 mx-auto">
          <p>Abdullah Al Bustoni</p>
          <p>5189 As Aafa Dist</p>
          <p>Jeddah</p>
        </div>
        <div className="address2 border border-black p-5 w-[300px] text-2xl sm:w-[500px] flex flex-col justify-center items-center mx-auto">
          <p>Rail Street</p>
          <p>Al Bathaa, Al Aml Dist</p>
          <p>Riyadh</p>
        </div>
      </div>
      <div className='py-40'>
        <img src={`./${imageIndex}.png`} alt={`Branch ${imageIndex}`} className='h-[20vh]' />
      </div>
    </div>
  );
}

export default Branches;
