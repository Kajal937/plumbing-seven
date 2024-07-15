import React from 'react'

const Professional = ({ title, desc, image }) => {
  return (
    <>
      <div className="max-w-[1280px] w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-[79px]  sm:px-[15px] md:px-[15px] lg:px-[15px] xl:px-[15px]">
          <div>
            <h1 className='text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl'>{title}</h1>
            <p className='text-lg text-gray-500 mt-4'>{desc}</p>
          </div>

          <div>
            <img className='w-full object-cover rounded-lg h-[530px]' src={image} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Professional
