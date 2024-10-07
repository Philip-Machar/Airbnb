import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="w-full px-16 py-8">
        <img src="/images/hero-image.png" alt="" />
        </div>
        <div className="p-8 max-w-[77%]">
            <h1 className="font-semibold text-4xl mb-4">Online Experiences</h1>
            <p className='text-[#222222] text-lg font-light'>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    </>
  )
}

export default Hero
