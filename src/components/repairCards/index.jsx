import { repair } from '@/utils/data/notes';
import React from 'react'



const RepairCards = () => {
  return (
    <>
      <div className="max-w-[1280px] w-full mx-auto px-4">
        <div className="">
          <p className='text-gray-600 text-opacity-75 text-center mb-[26px]'>At our plumbing company, we provide a comprehensive range of services to meet all your plumbing needs. Our expert team specializes in:</p>
        </div>

        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 sm:px-[15px] md:px-[15px] lg:px-[15px] xl:px-[15px]">
          {repair.map((value, index) => {
            return <div className="shadow-custom flex flex-col gap-[5px] p-[28px] rounded">
              <span>{value.i}</span>
              <h1 className='text-[30px] font-[600]'>{value?.h1}</h1>
              <p className='text-gray-600 text-opacity-75'>{value.p}</p>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default RepairCards
