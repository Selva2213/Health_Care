import { useAxios } from "../hooks/use-axios";
import { useEffect, useMemo, useState } from "react";
import useAuth from "../hooks/use-auth";
import { ClipLoader } from "react-spinners";
import { PatientAppointmentCard } from "../components/PatientAppointmentCard";

const PatientAppointments = () => {
  const { loading, fetchData } = useAxios();

  const { data: user } = useAuth();

  const [appointments, setAppointments] = useState([]);

  const [value, setValue] = useState("");

  const getAllAppointments = async () => {
    const { obj, error } = await fetchData(
      `/appointment/get/patient/${user?._id}`
    );
    if (error) console.log(error);
    else {
      setAppointments(obj?.data);
    }
  };

  useEffect(() => {
    getAllAppointments();
  }, []);

  const filtered = useMemo(() => {
    const filteredAppts = appointments?.filter(
      (apt) =>
        apt?.doctor?.fullname?.toLowerCase()?.includes(value.toLowerCase()) ||
        apt?.doctor?.workDetails?.currentWorkPlace
          ?.toLowerCase()
          ?.includes(value.toLowerCase()) ||
        apt?.status?.toLowerCase()?.includes(value.toLowerCase()) ||
        apt?.type?.toLowerCase()?.includes(value.toLowerCase())
    );
    return filteredAppts;
  }, [value]);

  if (loading) {
    return (
      <div className="h-scr grid place-items-center">
        <ClipLoader size={"2rem"} color="black" />
      </div>
    );
  }
  return (
    <div className="overflow-y-auto">
      <h1 className="text-blue-600 text-center font-semibold text-2xl">
        All Appointments
      </h1>
      <div className="mt-4 px-4">
        <input
          type="search"
          placeholder="Search by doctor name, place, status, type"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="py-2 px-4 rounded-md focus:outline-none border border-gray-300 w-[400px]"
        />
        {value && filtered.length < 1 && (
          <p className="text-red-500 text-sm ml-1">No Results</p>
        )}
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        {(filtered.length !== 0 ? filtered : appointments)?.map(
          (appointment) => (
            <PatientAppointmentCard
              key={appointment?._id}
              appointment={appointment}
            />
          )
        )}
      </div>
    </div>
  );
};

export default PatientAppointments;
