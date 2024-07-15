import React from 'react'

const AvailableServices = (props) => {
    return (
        <>
            <div className="pt-[50px] px-0 pb-[45px]">
                <div className="bg-customBlue  px-0 py-[24px]">
                    <h1 className='text-white text-center font-bold text-[35px] tracking-wider'>{props.text}</h1>
                </div>
            </div>
        </>
    )
}

export default AvailableServices
