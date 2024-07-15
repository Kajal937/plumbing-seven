import { useRouter } from 'next/router';
import React from 'react';

const ServiceCards = ({ data }) => {
const router = useRouter();

  return (
    <div className='max-w-[1280px] mx-auto w-full px-4'>

      <div className="grid lg:grid-cols-2 gap-9 sm:grid-cols-2 sm:px-[15px] md:px-[15px] lg:px-[15px] xl:px-[15px]">
        {data?.map((value, index) => (
          <div key={index} onClick={() => router.push(`/service/${value?.key}`)} className="flex flex-col gap-[16px] px-0 py-[13px] h-[460px] overflow-hidden  hover:scale-105 duration-700 ">
            <img className='object-cover w-full h-[330px]' src={value?.img} alt={value?.h1} />
            <div>
              <h1 className='text-[25px] font-bold'>{value?.h1}</h1>
              <p className='text-[16px] font-normal leading-[23px] text-customGray mt-[13px]'>{value?.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
