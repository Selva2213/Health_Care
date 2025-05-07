import { TbRibbonHealth } from "react-icons/tb";
import { RiHealthBookFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { MdAddHomeWork } from "react-icons/md";
import UserImage from "../assets/user.png";

const DoctorCard = ({ doctor, specialist }) => {
  return (
    <div className="capitalize border shadow shadow-blue-200 rounded-lg px-3 py-5 h-full">
      <div className="flex flex-col items-center justify-between">
        <div>
          <img
            src={doctor?.avatar || UserImage}
            alt={doctor?.fullname}
            className="object-cover rounded-lg h-36"
          />
        </div>
        <div className="space-y-3 [&_p]:font-semibold">
          <h2 className="text-xl font-bold text-cyan-700 text-center">
            {doctor?.fullname}
          </h2>
          <p className="text-gray-700 text-sm text-pretty text-justify flex items-center gap-2">
            <TbRibbonHealth />
            <span>{specialist}</span>
          </p>
          <p className="text-gray-700 text-sm text-pretty text-justify flex items-center gap-2">
            <RiHealthBookFill />
            <span>{doctor?.workDetails?.qualification}</span>
          </p>
          <p className="text-gray-700 text-sm text-pretty text-justify flex items-center gap-2">
            <MdAddHomeWork />
            <span>{doctor?.workDetails?.currentWorkPlace}</span>
          </p>
          <p className="text-gray-700 text-sm text-pretty text-justify flex items-center gap-2">
            <MdLocationPin />
            <span>{doctor?.city}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;