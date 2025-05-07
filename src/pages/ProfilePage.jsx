import React from 'react'
import ProfileDetails from '../components/ProfileDetails.jsx'
import Departments from '../components/Departments.jsx'
import DoctorsList from '../components/DoctorsList.jsx'
import SearchItem from '../components/SearchItem'
import { useState } from 'react'
import TestReports from '../components/TestReports.jsx'

const ProfilePage = () => {
    const [search, setSearch] = useState('')
    return (
        <div>
            <ProfileDetails username={"Username"} email={"Email Address"} />
            <hr className='border-gray-400 border-[1.3px]' />
            <Departments />
            <hr className='border-gray-400 border-[1.3px]' />

            <div className='bg-gradient-to-tl from-[#9ebffd] to-[#699bf7] py-4 my-4 rounded-lg'>
                <SearchItem
                    search={search}
                    setSearch={setSearch}
                    placeHolder={"Enter Symptoms"}
                />
                <DoctorsList />
            </div>
            <hr className='border-gray-400 border-[1.3px]' />
            <TestReports />
            <hr className='border-gray-400 border-[1.3px]' />
        </div>
    )
}

export default ProfilePage;
