import { visit } from '@/utils/data/notes'
import React from 'react'

const VisitContact = () => {
    return (
        <>
            <div className="max-w-[1280px] mx-auto w-full px-4">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-4 mb-4  sm:px-[15px] md:px-[15px] lg:px-[15px] xl:px-[15px]">
                    {visit.map((value, index) => (
                        <div className="p-4 rounded-lg bg-blue-50" key={index}>
                            <div className='w-[12%] p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700'>
                                <span className=''>{value?.i}</span>
                            </div>
                            <h2 className='mt-4 text-base font-medium text-gray-900'>{value?.h2}</h2>
                            <p className='mt-2 text-sm text-gray-500'>{value?.p}</p>
                            <p className='mt-2 text-sm text-blue-500 cursor-pointer dark:text-blue-400'>{value?.p1}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default VisitContact;
