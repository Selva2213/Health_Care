import React from 'react'
import Like from '../assets/like.png'

const AptSuccess = ({ drName, aptDate, aptTime}) => {
  return (
    <div className='flex flex-col items-center pt-8'>
      <img width={400}  src={Like}></img>
      <br></br>
      <h1 className='text-2xl font-bold'>Thank You !</h1>
      <br></br>
      <h1 className='/' >Your Appointment is booked Successfully</h1>
      <br></br>
      <br></br>
      <h1 className='/'>You booked an appointment with {drName} on {aptDate} at {aptTime}</h1>
      <br></br>
      <button className='bg-blue-500 py-3 px-24 text-white text-xl rounded-lg'>Done</button>
    </div>
  )
}

AptSuccess.defaultProps = {
    drName: "Dr. XYZ Sername",
    aptDate: "23/10/2024",
    aptTime: "02:30 PM"
}

export default AptSuccess;
