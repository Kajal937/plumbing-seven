import { areas } from '@/utils/data/notes'
import React from 'react'

const AreasCards = () => {
    return (
        <>
            <div className="max-w-[1280px] w-full mx-auto px-4">
                <div>
                    <p className='text-center text-[grey]'>
                        Our service offerings are tailored to support your plumbing business with essential services such as technical support, operational consulting, and efficient management solutions. We also specialize in enhancing your online presence through web development and digital marketing strategies. Our commitment to customer satisfaction ensures we deliver measurable results that drive growth and success. Partner with us to benefit from our expertise and dedicated support in the plumbing industry.
                    </p>
                </div>
                <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-[22px] sm:px-[15px] md:px-[15px] lg:px-[15px] xl:px-[15px]">
                    {areas.map((value, index) => {
                        return (
                            <div className="bg-[#F8F9FA] text-center mb-3 py-[45px] px-0 rounded-md" key={index}>
                                <button className='text-[#333131] text-[19px]'>{value.text}</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default AreasCards
