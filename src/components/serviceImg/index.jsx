import React from 'react'

const ServiceImg = () => {
    return (
        <>
            <div className="max-w-[1280px] w-full mx-auto px-4">
                <div className='sm:px-[15px] md:px-[15px] lg:px-[15px] xl:px-[15px]'>
                <div className="text-center">
                    <h1 className='text-[26px] font-semibold my-[15px] mx-0'>Service Areas</h1>
                    <p className='text-gray-600 text-opacity-75 '>Our service offerings are tailored to support your plumbing business with essential services such as technical support, operational consulting, and efficient management solutions. We also specialize in enhancing your online presence through web development and digital marketing strategies. Our commitment to customer satisfaction ensures we deliver measurable results that drive growth and success. Partner with us to benefit from our expertise and dedicated support in the plumbing industry.</p>
                </div>
                <div className="">
                    <img className='mt-10 object-cover w-full h-[420px]' src='https://plumbing-seven.vercel.app/contact-us.avif' />
                </div>
            </div>
            </div>
        </>
    )
}

export default ServiceImg
