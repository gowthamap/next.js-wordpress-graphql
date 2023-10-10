import Image from 'next/image'
import React from 'react'

const RhinoSection = ({classname}) => {
  return (
    <div className='w-full relative bg-hero h-screen'>
       {/* <Image
        src="/image.jpeg"
        priority
        alt="rhino logo"
        height={25}
        width={100}
        className='w-full h-2/5 relative'
        layout='responsive'
      /> */}
      <div className=' '>
        <h1 className='text-4xl font-bold'>Why <span className='text-primary-light'>Rhino?</span></h1>
      </div>
    </div>
  )
}

export default RhinoSection