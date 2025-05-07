import React from 'react'

const DeptCard = ({ deptName, imgSrc = "./vite.svg" }) => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 p-3 rounded-md w-[150px] shadow-md hover:shadow-lg cursor-pointer transition-all bg-white'>
            <img src={imgSrc} alt={deptName} />
            <p className='text-[0.8rem]'>{deptName}</p>
        </div>
    )
}

export default DeptCard
