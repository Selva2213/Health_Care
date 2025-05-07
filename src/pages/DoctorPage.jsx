import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAxios } from "../hooks/use-axios";
import { ClipLoader } from "react-spinners";
import ReviewCard from "../components/ReviewCard";
import DoctorDetails from "../components/DoctorDetails";
import useAuth from "../hooks/use-auth";
import Footer from "../components/Footer";

const DoctorPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { fetchData, loading } = useAxios();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const [specialities, setSpecialities] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [doctor, setDoctor] = useState({});

  const getAllSpecialities = async () => {
    const { obj, error } = await fetchData("/specialities");
    if (error) console.log(error);
    else {
      setSpecialities(obj?.data);
    }
  };

  const getDoctor = async () => {
    const { obj, error } = await fetchData(`/users/doctors/getDoctor/${id}`);
    if (error) console.log(error);
    else {
      setDoctor(obj?.data);
    }
  };

  const getAllReviews = async () => {
    const { obj, error } = await fetchData(`/reviews/getDoctorReviews/${id}`);
    if (error) console.log(error);
    else {
      setReviews(obj?.data);
    }
  };
  useEffect(() => {
    if (!id) navigate("/search", { replace: true });
    else {
      getDoctor();
      if (doctor) {
        getAllSpecialities();
        getAllReviews();
      }
    }
  }, [id]);

  console.log(reviews);

  const specialist = specialities.find(
    (s) => s.name === doctor?.workDetails?.specialities[0]?.name
  )?.term;

  if (loading) {
    return (
      <div className="h-scr grid place-items-center">
        <ClipLoader size={"2rem"} color="black" />
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-5 mb-5">
        <div className="bg-gradient-to-l from-indigo-500 to-sky-400 py-12 px-14 flex gap-10 opacity-[0.95] relative">
          <div className="flex flex-col gap-7 items-start">
            <h1 className="text-4xl font-bold text-white">
              Don't Let Your Health <br />
              Take a Backseat!
            </h1>
            <p className="font-semibold text-[1.1rem] text-blue-950">
              Scheduled an appointment with one of our <br />
              exprerienced medical professional today!
            </p>
            <Link
              to={
                isAuthenticated
                  ? `/appointment?id=${doctor?._id}&specialist=${specialist}`
                  : "/login"
              }
              className="py-2 px-4 bg-gradient text-white rounded-md"
            >
              Book An Appointment
            </Link>
          </div>

          <img
            className="absolute right-0 bottom-1/4 overflow-hidden md:right-36 -z-50 w-[700px]"
            draggable="false"
            src="./honeycomb.svg"
            alt="honeycomb"
          />
        </div>

        {/* Display doctor details */}
        <DoctorDetails
          doctor={doctor}
          specialist={specialist}
          showAppointmentButon={true}
        />

        <hr className="border-b border-b-gray-400" />
        {/* Reviews */}

        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ReviewCard user={doctor} />
            <ReviewCard user={doctor} />
            <ReviewCard user={doctor} />
            <ReviewCard user={doctor} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorPage;
