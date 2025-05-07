import { FaCircleCheck } from "react-icons/fa6";
import {
  MdAccessTimeFilled,
  MdAddHomeWork,
  MdLocationPin,
  MdOutlineShortText,
} from "react-icons/md";
import { RiHealthBookFill } from "react-icons/ri";
import { TbRibbonHealth } from "react-icons/tb";
import UserImage from "../assets/user.png";
import { Link } from "react-router-dom";
import useAuth from "../hooks/use-auth";

const DoctorDetails = ({ doctor, specialist, showAppointmentButon }) => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="flex flex-col md:flex-row gap-12 p-6 items-center">
      <div>
        <img
          src={doctor?.avatar || UserImage}
          alt={doctor?.fullname}
          height={200}
          width={150}
          className="object-cover rounded-md"
        />
      </div>
      <div className="space-y-2 w-full">
        <div className="flex items-center gap-4 justify-between">
          <h2 className="text-3xl font-semibold capitalize text-blue-700">
            Dr.&nbsp;{doctor?.fullname}
          </h2>
          {showAppointmentButon && (
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
          )}
        </div>
        <p className="text-gray-700 text-pretty text-justify flex items-center gap-2">
          <TbRibbonHealth className="text-cyan-800" />
          <span>{specialist}</span>
        </p>
        <p className="text-gray-700 text-pretty text-justify flex items-center gap-2">
          <RiHealthBookFill className="text-cyan-800" />
          <span>{doctor?.workDetails?.qualification}</span>
        </p>
        <p className="text-gray-700 text-pretty text-justify flex items-center gap-2">
          <MdAccessTimeFilled className="text-cyan-800" />
          <span>{doctor?.workDetails?.workingTime}</span>
        </p>
        <p className="text-gray-700 text-pretty text-justify flex items-center gap-2">
          <MdAddHomeWork className="text-cyan-800" />
          <span>{doctor?.workDetails?.currentWorkPlace}</span>
        </p>
        <p className="text-gray-700 text-pretty text-justify flex items-center gap-2">
          <MdLocationPin className="text-cyan-800" />
          <span>{doctor?.city}</span>
        </p>
        <p className="text-gray-700 text-pretty text-justify flex items-center gap-2">
          <MdOutlineShortText size={"1.4rem"} className="text-cyan-800" />
          <span>
            Dr. {doctor?.fullname} is a {specialist} in {doctor?.city}. Dr.
            &nbsp;{doctor?.fullname} practices at{" "}
            {doctor?.workDetails?.currentWorkPlace}. The doctor has completed{" "}
            {doctor?.workDetails?.qualification}.
          </span>
        </p>
        <p className="text-gray-700 text-pretty text-justify flex items-center gap-2 py-2">
          <FaCircleCheck color="green" />
          <span>Medical Registration Verified</span>
        </p>
      </div>
    </div>
  );
};

export default DoctorDetails;
