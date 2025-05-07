import React from 'react'
import TestCard from './TestCard'

const TestReports = ({ testsDone }) => {
    return (
        <div className='my-5'>
            <h2 className='font-bold text-2xl text-[#002b9a]'>My Reports</h2>
            <div className='grid grid-cols-4 justify-items-center my-6'>
                {testsDone.map(testInfo => <TestCard info={testInfo} />)}
            </div>
        </div>
    )
}

TestReports.defaultProps = {
    testsDone: [
        {
            imgSrc: "./blood-test.jpg",
            testName: "Blood Test",
            testDescription: "Small Description of the Test Report"
        },

        {
            imgSrc: "./blood-test.jpg",
            testName: "Blood Test",
            testDescription: "Small Description of the Test Report"
        },

        {
            imgSrc: "./blood-test.jpg",
            testName: "Blood Test",
            testDescription: "Small Description of the Test Report"
        },

        {
            imgSrc: "./blood-test.jpg",
            testName: "Blood Test",
            testDescription: "Small Description of the Test Report"
        },
    ]
}

export default TestReports
