import React from 'react'

const PatientAppointment = ({PatientAppt}) => {
  return (
    <>
      <br></br>
      <div className='flex flex-col items-center'>
            {PatientAppt.map((info) => (
                <div>
                    <div className='flex justify-between items-center bg-gray-200 hover:bg-gray-300 transition-all cursor-pointer w-[40vw] px-2 py-2 rounded-lg'>
                        <div className='flex flex-row items-center gap-6'>
                        <img className='w-[80px] h-[80px] rounded-[50%] object-cover' src={info.ima}></img>
                        <div className='flex-col'>
                            <h1>{info.name}</h1>
                            <p>{info.gender}, {info.age} years old</p>
                        </div>
                        </div>
                        <button className='pr-6'>View</button>
                    </div>
                    <br></br>
                </div>
            ))}
        </div>
    </>
  )
}

PatientAppointment.defaultProps = {
    PatientAppt: [{
        ima: './profile1.jpg',
        name: "Srujan",
        gender: "Male",
        age: "29",
        time: "10:30 AM",
        date: "23/10/2024"
    },
    {
        ima: './profile7.jpeg',
        name: "Virat",
        gender: "Female",
        age: "25",
        time: "04:00 PM",
        date: "25/10/2024"
    },
    {
        ima: './profile3.jpeg',
        name: "Shruthi",
        gender: "Female",
        age: "25",
        time: "09:00 PM",
        date: "28/11/2024"
    }
    ]
}

export default PatientAppointment
