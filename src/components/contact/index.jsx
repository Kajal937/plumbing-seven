import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='max-w-[1280px] mx-auto w-full px-4'>
                <div className="text-center  sm:px-[15px] md:px-[15px] lg:px-[15px] xl:px-[15px]">
                    <h1 className=' text-[29px] font-semibold text-gray-800'>We’d love to hear from you</h1>
                    <p className='mt-3 text-gray-500 dark:text-gray-50'>Chat to our friendly team.</p>
                </div>

                <img className='w-full object-cover h-[390px] rounded-lg px-[16px]' src='https://plumbing-seven.vercel.app/contact-us.avif' />
            </div>

        </>
    )
}

export default Contact
