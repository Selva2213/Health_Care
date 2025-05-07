import React from 'react'
import SearchItem from './SearchItem'
import { useState } from 'react'
import PatientAppointment from './PatientAppointment'
import CompletedAppointment from './CompletedAppointment'
import CanceledAppointment from './CanceledAppointment'

const Appointment = () => {
  const [UI, setUI] = useState(0)
  let styles = 'underline bg-gray-300 py-2 px-5 rounded-lg text-blue-600 text-xl';
  
  return (
    <>
    <div>
      <SearchItem placeHolder={"Search"}/>
    </div>
    <br />
    <div className='flex justify-around px-10'>
                <button className={UI==0 ? styles : "text-[18px] hover:bg-gray-200 py-2 px-5 rounded-lg"} onClick={() => setUI(0)}>Pending</button>
                <button className={UI==1 ? styles : "text-[18px] hover:bg-gray-200 py-2 px-5 rounded-lg"} onClick={() => setUI(1)}>Completed</button>
                <button className={UI==2 ? styles : "text-[18px] hover:bg-gray-200 py-2 px-5 rounded-lg"} onClick={() => setUI(2)}>Canceled</button>
            </div>
            <br></br>
            {UI == 0 && <PatientAppointment/>}
            {UI == 1 && <CompletedAppointment/>}
            {UI == 2 && <CanceledAppointment/>}
    </>
  )
}

export default Appointment
