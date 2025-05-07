import {
  MdAddHomeWork,
  MdOutlineAccessTimeFilled,
  MdPendingActions,
  MdShortText,
  MdWrapText,
} from "react-icons/md";

import moment from "moment";
import UserImage from "../assets/user.png";
import { Link } from "react-router-dom";

export const PatientAppointmentCard = ({ appointment }) => {
  const formattedDateTime = moment(appointment.datetime).format(
    "DD-MM-YYYY, h:mm a"
  );
  const statusStyle =
    (appointment.status === "PENDING" && "text-orange-500") ||
    (appointment.status === "CONFIRMED" && "text-blue-500") ||
    (appointment.status === "COMPLETED" && "text-green-500") ||
    (appointment.status === "CANCELED" && "text-red-500");
  return (
    <div className="flex items-center gap-7 p-4 rounded-lg shadow-md border border-gray-300 capitalize my-3">
      <div>
        <img
          src={appointment?.doctor?.avatar || UserImage}
          alt={appointment?.doctor?.fullname}
          width={100}
          height={100}
          className="object-cover rounded-md"
        />
      </div>
      <div className="space-y-3">
        <p className="text-lg flex items-center gap-1">
          <span>Doctor:</span>
          <Link
            to={`/doctor?id=${appointment?.doctor?._id}`}
            className="font-semibold capitalize underline text-blue-600"
          >
            Dr.&nbsp;{appointment?.doctor?.fullname}
          </Link>
        </p>
        <p className="text-gray-700 text-pretty text-justify flex items-center gap-2">
          <MdAddHomeWork className="text-cyan-800" />
          <span>
            Place: {appointment?.doctor?.workDetails?.currentWorkPlace}
          </span>
        </p>
        <p className="text-gray-700 text-pretty text-justify flex items-center gap-2">
          <MdOutlineAccessTimeFilled className="text-cyan-800" />
          <span>Time: {formattedDateTime}</span>
        </p>
        <p className="text-gray-700 text-pretty text-justify flex items-center gap-2">
          <MdPendingActions className="text-cyan-800" />
          <>
            Status:
            <span className={`${statusStyle} font-medium`}>
              {appointment?.status}
            </span>
          </>
        </p>
        <p className="text-gray-700 text-pretty text-justify flex items-center gap-2">
          <MdShortText className="text-cyan-800" />
          <span>Type: {appointment?.type}</span>
        </p>
        <p className="text-gray-700 text-pretty text-justify flex items-center gap-2">
          <MdWrapText className="text-cyan-800" />
          <span>Description: {appointment?.description}</span>
        </p>
      </div>
    </div>
  );
};
