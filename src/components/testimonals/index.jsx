import { testimonals } from '@/utils/data/notes'
import React from 'react'

const Testimonals = () => {
    return (
        <>
            <div className="max-w-[1280px] w-full mx-auto px-4">
                <div className="">
                    <p className='text-gray-600 text-opacity-75 text-center mb-[28px]'>Our testimonials highlight the positive experiences of our satisfied clients in plumbing services. They reflect our commitment to excellence, showcasing our ability to deliver prompt, reliable, and high-quality solutions. From emergency repairs to routine maintenance, our clients’ feedback underscores our dedication, expertise, and the value we bring to their homes and businesses. Partner with us to join our community of success stories.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-6 sm:px-[15px] md:px-[15px] lg:px-[15px] xl:px-[15px]">
                    {testimonals.map((value, index) => {
                        return <div className="flex flex-col p-8 border  rounded-lg dark:border-gray-700 gap-[88px]">
                            <p className='text-gray-600 text-opacity-75'>{value.p}</p>
                            <div className="flex items-center gap-6">
                                <div className='w-[14%]'>
                                    <img className='w-full' src='https://plumbing-seven.vercel.app/user_avatar.png' />
                                </div>
                                <div className="">
                                    <h1 className='text-gray-900'>Alice robinson</h1>
                                    <span className='text-gray-600 text-opacity-75'>Homeowner</span>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>

        </>
    )
}

export default Testimonals
