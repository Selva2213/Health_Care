import React from 'react'

const DetailsCard = ({ iconName, achievements, value }) => {
    return (
        < div className='flex flex-col gap-2 w-fit items-center' >
            <div className='bg-blue-200 p-5 rounded-[50%]'>
                <i className={`fa-solid fa-${iconName} fa-xl`} style={{ color: "#0886fd" }}></i>
            </div>
            <h3 className='font-semibold text-3xl text-blue-500'>{achievements}</h3>
            <p className='text-[1.1rem] font-semibold text-gray-600'>{value}</p>
        </div >
    )
}

export default DetailsCard;
