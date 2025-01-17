import React from 'react'
import ResponsiveCardSlider from './Triple'

function Display() {
  return (
    <div className='h-[100vh]  w-full overflow-hidden font-beb grid place-content-center text-center'>
      <div className="">
        <p className='text-7xl'>Our products</p>
      </div>
      <div className="">
        <ResponsiveCardSlider/>
      </div>
      <div className="">
        <button className='border border-black p-3 text-3xl'>View all products</button>
      </div>
    </div>
  )
}

export default Display
