import { useEffect, useState } from "react";
import { useAxios } from "../hooks/use-axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import DoctorDetails from "../components/DoctorDetails";
import AppointmentForm from "../components/AppointmentForm";
import { ClipLoader } from "react-spinners";
import Footer from "../components/Footer";

const AppointmentPage = () => {
  const navigate = useNavigate();
  const { fetchData, loading } = useAxios();
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");
  const specialist = searchParams.get("specialist");

  const [doctor, setDoctor] = useState({});

  const getDoctor = async () => {
    const { obj, error } = await fetchData(`/users/doctors/getDoctor/${id}`);
    if (error) console.log(error);
    else {
      setDoctor(obj?.data);
    }
  };
  useEffect(() => {
    if (!id) navigate("/search", { replace: true });
    else {
      getDoctor();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="h-scr grid place-items-center">
        <ClipLoader size={"2rem"} color="black" />
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <div className="container py-6 mx-auto">
        <h2 className="text-3xl font-semibold text-indigo-900 text-center">
          Book An Appointment
        </h2>
        <div className="border border-gray-300 shadow-md rounded-lg my-4">
          {/* Display doctor details */}
          <DoctorDetails
            doctor={doctor}
            specialist={specialist}
            showAppointmentButon={false}
          />
        </div>
        <div className="space-y-6 p-4">
          <h3 className="text-xl text-indigo-800 font-semibold">
            Fill Up Your Details
          </h3>
          <div className="flex justify-between relative">
            <div>
              <AppointmentForm doctorId={doctor?._id} />
            </div>

            <div className="hidden sm:block">
              <img
                width={230}
                className="drop-shadow-xl mr-5"
                src="./doctor_appointment.png"
                alt="doctor-apt"
              />
              <img
                className="rotate-90 absolute top-0 right-0 -z-10 w-[30vw]"
                src="./bg-style.svg"
                alt="styles"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppointmentPage;
