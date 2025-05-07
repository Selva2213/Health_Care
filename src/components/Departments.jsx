import React from 'react'
import DeptCard from './DeptCard';

const Departments = () => {
    let deptNames = ["Emergency Department", "Pediatric Department", "Obstetrics and Gynecology Department", "Cardiology Department", "Neurology Department", "Psychiatry Department"];
    let imgSrcs = [];

    return (
        <div className='bg-gradient-to-tl from-[#365486] to-[#7FC7D9] py-4 rounded-lg m-4 flex flex-col justify-center gap-5'>
            <h2 className='text-center font-bold text-3xl text-white'>Select Departments</h2>
            <div className='flex justify-around text-center'>
                {deptNames.map(deptName => <DeptCard deptName={deptName} />)}
            </div>
        </div>
    )
}

export default Departments
