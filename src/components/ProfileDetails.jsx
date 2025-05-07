import React from 'react'
import SubmitButton from './SubmitButton'

const ProfileDetails = ({ username, email, imgSrc = "./profile.svg" }) => {
    let customStyle = 'px-3 py-1 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all';

    return (
        <div className='flex justify-center py-5'>
            <div className='flex flex-col gap-5 items-center w-fit'>
                <h1 className='font-[600] text-[1.6rem] underline text-left w-full'>Your Profile</h1>
                <div className='flex gap-7 items-center'>
                    <img className='border-[1px] border-black rounded-lg' width={130} src={imgSrc} alt="profile" />
                    <div className='flex flex-col gap-3 items-center'>
                        <div className='border-[1px] text-gray-700 border-black px-3 py-1 w-[340px] rounded-md bg-sky-100'>{username}</div>
                        <div className='border-[1px] text-gray-700 border-black px-3 py-1 w-[340px] rounded-md bg-sky-100'>{email}</div>
                        <div className='flex gap-4 bg-emerald-200 px-4 py-2 hover:cursor-pointer rounded-md'>
                            <img width={40} src="./bank.svg" alt="bank-img" />
                            <div className='text-center'>
                                <button className='font-bold text-[0.9rem] hover:underline'>Bank Link</button>
                                <p className='font-[100] text-[0.8rem]'>Connect your bank account to deposit & fund</p>
                            </div>
                            <img width={30} src="./assurance.svg" alt="Assured" />
                        </div>
                        <div className='flex gap-2'>
                            <SubmitButton message={"Change Password"} styles={customStyle} />
                            <SubmitButton message={"Log out"} styles={customStyle} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails
