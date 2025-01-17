import React from 'react'
import ResponsiveCardSlider from './Triple'

function Display() {
  return (
    <div className='h-[] py-[10vh] w-full overflow-hidden font-beb grid place-content-center text-center'>
      <div className="">
        <p className='text-7xl'>Our products</p>
      </div>
      <div className="">
        <ResponsiveCardSlider/>
      </div>
    </div>
  )
}

export default Display
