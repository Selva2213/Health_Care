import React from 'react'

const TestCard = ({info}) => {
    return (
        <div className='flex flex-col justify-center items-start w-fit border-[1px] border-gray-500 rounded-lg p-3 gap-1 bg-gray-100 hover:shadow-lg hover:scale-[1.02] hover:bg-gray-200 transition-all duration-300 cursor-pointer'>
            <img width={250} height={200} className='rounded-md shadow-md object-cover' src={info.imgSrc} alt="blood-test" />
            <h2 className='font-bold text-xl'>{info.testName}</h2>
            <p className='font-[400] text-gray-600 text-[0.9rem]'>{info.testDescription}</p>
            <button className='bg-blue-500 py-1 px-6 rounded-md text-white'>View</button>
        </div>
    )
}

TestCard.defaultProps = {
    info: {
        imgSrc: "./blood-test.jpg",
        testName: "Blood Test",
        testDescription: "Small Description of the Test Report"
    }
}

export default TestCard
