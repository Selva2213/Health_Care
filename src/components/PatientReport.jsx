import React from 'react'

const PatientReport = ({PatientRpt}) => {
  return (
    <div className='flex flex-col items-center'>
            {PatientRpt.map((info) => (
                <div>
                    <div className='flex justify-between items-center bg-gray-200 hover:bg-gray-300 transition-all cursor-pointer duration-300 w-[40vw] px-2 py-2 rounded-lg'>
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
  )
}


PatientReport.defaultProps = {
  PatientRpt: [{
      ima: './profile2.jpg',
      name: "Rahul",
      gender: "Male",
      age: "29",
  },
  {
      ima: './profile3.jpeg',
      name: "Shruthi",
      gender: "Female",
      age: "25",
  }
  ]
}

export default PatientReport
