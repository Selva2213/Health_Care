import React from 'react'
import DoctorCard from './DoctorCard'

const DoctorsList = ({ doctorsInfo }) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-4 justify-items-center py-5'>
                {doctorsInfo.map(info => <DoctorCard info={info} />)}
            </div>
        </div>
    )
}

DoctorsList.defaultProps = {
    doctorsInfo: [
        {
            name: "Doctor Name",
            role: "Department",
            imgSrc: "./profile.svg"
        },

        {
            name: "Doctor Name",
            role: "Department",
            imgSrc: "./profile.svg"
        },

        {
            name: "Doctor Name",
            role: "Department",
            imgSrc: "./profile.svg"
        },
        {
            name: "Doctor Name",
            role: "Department",
            imgSrc: "./profile.svg"
        },

        {
            name: "Doctor Name",
            role: "Department",
            imgSrc: "./profile.svg"
        },

        {
            name: "Doctor Name",
            role: "Department",
            imgSrc: "./profile.svg"
        },
    ]
}

export default DoctorsList
