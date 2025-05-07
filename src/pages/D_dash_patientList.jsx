import React from "react";
import defaultDP from "../assets/default_doctor_profile.png";
import { useState } from "react";
import PatientList from "../components/PatientList";
import Appointment from "../components/Appointment";
import PatientReport from "../components/PatientReport";

const D_dash_patientList = ({ userName, docDetails }) => {
  const [UI, setUI] = useState(0);
  let styles =
    "underline bg-gray-300 py-2 px-5 rounded-lg text-blue-600 text-2xl";

  return (
    <>
      <div className="flex justify-start">
        <div className="flex justify-center py-5">
          <div className="flex flex-col gap-5 items-center w-fit">
            <h1 className="font-[600] text-[1.6rem] underline text-left w-full">
              Your Profile
            </h1>
            <div className="flex gap-7 items-center">
              <img
                className="border-[1px] border-black rounded-[50%]"
                width={185}
                src={defaultDP}
                alt="profile"
              />
              <div className="flex flex-col gap-3 items-center">
                <div className="border-[1px] text-gray-700 border-black px-3 py-1 w-[340px] rounded-md bg-sky-100">
                  {userName}
                </div>
                <div className="border-[1px] text-gray-700 border-black px-3 py-1 w-[340px] rounded-md bg-sky-100">
                  {docDetails}
                </div>
                <button className="bg-blue-500 py-1 px-10 text-white text-xl rounded-lg">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="flex justify-around px-10">
        <button
          className={
            UI == 0 ? styles : "text-xl hover:bg-gray-200 py-2 px-5 rounded-lg"
          }
          onClick={() => setUI(0)}
        >
          Patient List
        </button>
        <button
          className={
            UI == 1 ? styles : "text-xl hover:bg-gray-200 py-2 px-5 rounded-lg"
          }
          onClick={() => setUI(1)}
        >
          Appointments
        </button>
        <button
          className={
            UI == 2 ? styles : "text-xl hover:bg-gray-200 py-2 px-5 rounded-lg"
          }
          onClick={() => setUI(2)}
        >
          Patient Report
        </button>
      </div>
      <br></br>
      {UI == 0 && <PatientList />}
      {UI == 1 && <Appointment />}
      {UI == 2 && <PatientReport />}
    </>
  );
};

D_dash_patientList.defaultProps = {
  userName: "Best Doctor ",
  docDetails:
    "Successfully practiced medicine for the past 15 years. Working as a pediatrician in XYZ hospital. ",
};

export default D_dash_patientList;
