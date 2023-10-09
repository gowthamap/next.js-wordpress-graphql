import Image from 'next/image'
import React from 'react'

const BannerSection = () => {
  return (
    <div className='w-full' style={{background: '/public/banner.jpeg'}}>
       <Image
        src="/banner.jpeg"
        priority
        alt="rhino logo"
        height={25}
        width={100}
        className='w-full h-[49.75rem] -top-40 '
        layout='responsive'
      />
    </div>
  )
}

export default BannerSection