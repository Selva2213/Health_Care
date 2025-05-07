import { useState } from "react";
import useAuth from "../hooks/use-auth";
import { useAxios } from "../hooks/use-axios";
import { toast } from "sonner";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { validateObject } from "../util/validateObject";

const AppointmentForm = ({ doctorId }) => {
  const navigate = useNavigate();
  const { data: user } = useAuth();

  const { loading, mutateData } = useAxios();

  const [data, setData] = useState({
    datetime: "",
    type: "",
    mode: "",
    description: "",
  });
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error: validationError } = validateObject({ ...data });
    if (validationError) {
      toast.error(validationError);
      return;
    }
    // const formattedDateTime = moment(data.datetime).format(
    //   "DD-MM-YYYY, h:mm:ss a"
    // );
    const body = {
      ...data,
      patient: user?._id,
      doctor: doctorId,
    };
    console.log(body);
    const { obj, error } = await mutateData("/appointment/create", body);
    if (error) {
      toast.error(error || "Failed to book an appointment");
      return;
    }
    if (obj) {
      toast.success(obj?.message || "Appointment booked successfully!");
      navigate("/", { replace: true });
    }
  };
  return (
    <form
      className="w-full md:w-[400px] mx-auto space-y-4"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label htmlFor={"name"} className=" text-indigo-900 font-[500]">
          Name
        </label>
        <input
          className="py-2 px-4 rounded-full border border-gray-400 w-full disabled:bg-gray-300"
          type={"text"}
          value={user?.fullname}
          disabled
        />
      </div>
      <div className="space-y-2">
        <label htmlFor={"phone"} className=" text-indigo-900 font-[500]">
          Phone
        </label>
        <input
          className="py-2 px-4 rounded-full border border-gray-400 w-full disabled:bg-gray-300"
          type={"text"}
          value={user?.phone}
          disabled
        />
      </div>
      <div className="space-y-2">
        <label htmlFor={"datetime"} className=" text-indigo-900 font-[500]">
          Date Time
        </label>
        <input
          className="py-2 px-4 rounded-full border border-gray-400 w-full disabled:bg-gray-400"
          type={"datetime-local"}
          name="datetime"
          id={"datetime"}
          pattern="[0-9]{10}"
          onChange={handleChange}
          value={data.datetime}
        />
        <p className="text-gray-500 text-xs ml-1">
          *Select time within the range of doctor working hours
        </p>
      </div>
      <div className="space-y-2">
        <label htmlFor={"description"} className=" text-indigo-900 font-[500]">
          What Happened?
        </label>
        <textarea
          className="py-2 px-4 rounded-md border border-gray-400 w-full"
          name="description"
          id={"description"}
          rows={2}
          onChange={handleChange}
          value={data.description}
        />
        <p className="text-gray-500 text-xs ml-1">
          *Enter the cause for appointment with symptoms seprated by comma(,)
        </p>
      </div>
      <div>
        <label className=" text-indigo-900 font-[500]">Reason</label>
        <div className="flex items-center gap-6 ml-1 mt-2">
          <div className="flex items-center gap-2">
            <label htmlFor="first">First Time Visit</label>
            <input
              type="radio"
              id="first"
              name="type"
              value="First Time Visit"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="routine">Routine CheckUp</label>
            <input
              type="radio"
              id="routine"
              name="type"
              value="Routine CheckUp"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div>
        <label className=" text-indigo-900 font-[500]">Mode</label>
        <div className="flex items-center gap-6 ml-1 mt-2">
          <div className="flex items-center gap-2">
            <label htmlFor="online">Online</label>
            <input
              type="radio"
              id="online"
              name="mode"
              value="ONLINE"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="offline">Offline</label>
            <input
              type="radio"
              id="offline"
              name="mode"
              value="OFFLINE"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="col-span-12">
        <button
          type="submit"
          disabled={loading}
          className="py-2 px-4 rounded-md bg-gradient text-white"
        >
          {loading ? (
            <ClipLoader size={"1.1rem"} color="white" />
          ) : (
            "Book Appointment"
          )}
        </button>
      </div>
    </form>
  );
};

export default AppointmentForm;
