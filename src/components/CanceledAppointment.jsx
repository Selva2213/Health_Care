import React from 'react'

const CanceledAppointment = ({ CanceledAppt }) => {
  return (
    <div className='flex flex-col items-center'>
            {CanceledAppt.map((info) => (
                <div key={info.name}>
                    <div className='flex justify-start gap-6 items-center bg-gray-200 hover:bg-gray-300 transition-all w-[40vw] px-2 py-2 rounded-lg'>
                        <img className='w-[80px] h-[80px] rounded-[50%] object-cover' src={info.ima}></img>
                        <div className='flex-col'>
                            <h1>{info.name}</h1>
                            <p>{info.gender}, {info.age} years old</p>
                            <p>Appointment canceled on {info.date} at {info.time}</p>
                        </div>
                    </div>
                    <br></br>
                </div>
            ))}
        </div>
  )
}

CanceledAppointment.defaultProps = {
  CanceledAppt: [{
      ima: './profile8.jpg',
      name: "Disha patani",
      gender: "Female",
      age: "29",
      time: "10:30 AM",
      date: "23/10/2024"
  },
  {
      ima: './profile5.jpeg',
      name: "Gowtham",
      gender: "Male",
      age: "25",
      time: "04:00 PM",
      date: "25/10/2024"
  },
  {
      ima: './profile6.jpeg',
      name: "Andrew",
      gender: "Male",
      age: "25",
      time: "09:00 PM",
      date: "28/11/2024"
  }
  ]
}

export default CanceledAppointment
