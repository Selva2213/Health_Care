import { useEffect, useState, useTransition } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { toast } from "sonner";
import axios from "../lib/axios";
import { validateObject } from "../util/validateObject";
import useAuth from "../hooks/use-auth";

const WorkDetailsPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { isAuthenticated, data: user } = useAuth();

  const doctorId = params?.doctorId;

  useEffect(() => {
    if (!doctorId && !isAuthenticated) {
      return navigate("/", { replace: true });
    }
  }, [doctorId, isAuthenticated]);

  useEffect(() => {
    if (user) {
      if (user?._id !== doctorId) {
        return navigate(`/`, { replace: true });
      }
      if (user?.role !== "DOCTOR") {
        return navigate(`/`, { replace: true });
      }
    }
  }, [user]);

  const [isPending, startTransition] = useTransition();
  const [workingTime, setWorkingTime] = useState({
    from: "",
    to: "",
  });
  const [values, setValues] = useState({
    registrationId: "",
    currentWorkPlace: "",
    qualification: "",
    specialities: [],
  });
  const [speciality, setSpeciality] = useState("");

  const [specialities, setSpecialities] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await axios.get("/specialities");
        setSpecialities(res.data.data);
      } catch (error) {
        console.log(error);
      }
    });
  }, []);

  const handleChange = (e) =>
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const addSpecialities = (value) => {
    const existing = values.specialities.some((s) => s === value);
    if (existing) return;
    setSpeciality(value);
    setValues((prev) => ({
      ...prev,
      specialities: [...values.specialities, value],
    }));
    setSpeciality("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error } = validateObject({ doctorId, ...values, ...workingTime });
    if (error) {
      toast.error(error);
      return;
    }
    //conevrt 18:30 to "6:30 PM"
    const from = moment(workingTime.from, "HH:mm").format("h:mm A");
    const to = moment(workingTime.to, "HH:mm").format("h:mm A");
    const data = { ...values, workingTime: `${from} - ${to}` };
    startTransition(async () => {
      try {
        const res = await axios.post(`/workDetails/add/${doctorId}`, data);
        console.log(res.data.data);
        toast.success(
          res.data.data.message || "Request submitted successfully!"
        );
        navigate("/", { replace: true });
      } catch (error) {
        console.log(error);
        toast.error(
          error.response?.data?.message || "Failed to add work details"
        );
      }
    });
  };

  return (
    <div className="grid place-items-center h-screen bg-gradient-to-r from-indigo-900 via-blue-600 to-cyan-400 overflow-y-auto py-6 px-4">
      <form
        onSubmit={handleSubmit}
        className="rounded-md shadow-black shadow-sm px-8 py-10 bg-gray-100"
      >
        <div className="text-center space-y-2 my-2">
          <h1 className="text-blue-700 font-semibold text-2xl">Work Details</h1>
          <p className="text-gray-700 text-sm">
            *Fill up your details to submit request to join as a doctor
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-2 my-2">
            <label htmlFor="registrationId">Doctor Registration Id</label>
            <input
              type="text"
              id="registrationId"
              name="registrationId"
              placeholder="Ex:23MBS12345"
              value={values.registrationId}
              onChange={handleChange}
              className="w-full py-2 px-3 border border-gray-600 focus:outline-none rounded-md"
            />
          </div>
          <div className="space-y-2 my-2">
            <label htmlFor="qualification">Qualification</label>
            <input
              type="text"
              id="qualification"
              name="qualification"
              placeholder="MBBS M.D"
              value={values.qualification}
              onChange={handleChange}
              className="w-full py-2 px-3 border border-gray-600 focus:outline-none rounded-md"
            />
          </div>
          <div className="space-y-2 my-2">
            <label htmlFor="from">Work From</label>
            <input
              type="time"
              id="from"
              name="from"
              value={workingTime.from}
              onChange={(e) =>
                setWorkingTime((prev) => ({ ...prev, from: e.target.value }))
              }
              className="w-full py-2 px-3 border border-gray-600 focus:outline-none rounded-md"
            />
          </div>
          <div className="space-y-2 my-2">
            <label htmlFor="to">Work To</label>
            <input
              type="time"
              id="to"
              name="to"
              value={workingTime.to}
              onChange={(e) =>
                setWorkingTime((prev) => ({ ...prev, to: e.target.value }))
              }
              className="w-full py-2 px-3 border border-gray-600 focus:outline-none rounded-md"
            />
          </div>
        </div>
        <div className="space-y-2 my-2">
          <label htmlFor="currentWorkPlace">Current Work Place</label>
          <input
            type="text"
            id="currentWorkPlace"
            name="currentWorkPlace"
            placeholder="XYZ Hospital/Clinic, Mysuru"
            value={values.currentWorkPlace}
            onChange={handleChange}
            className="w-full py-2 px-3 border border-gray-600 focus:outline-none rounded-md"
          />
        </div>
        <div className="space-y-2 my-2">
          <label htmlFor="speciality">Specalities</label>
          <select
            id="speciality"
            name="speciality"
            value={speciality}
            onChange={(e) => addSpecialities(e.target.value)}
            className="w-full py-2 px-3 border border-gray-600 focus:outline-none rounded-md text-center capitalize"
          >
            <option value="" hidden>
              --Select Speciality--
            </option>
            {specialities.map((speciality) => (
              <option key={speciality._id} value={speciality._id}>
                {speciality.name}
              </option>
            ))}
          </select>
        </div>
        {/* Display selected specalities */}
        {values.specialities.length > 0 && (
          <div className="space-y-2 my-2">
            <p className="text-sm text-gray-700">
              Click to remove selected specialities
            </p>
            <div className=" flex items-center gap-2">
              {values.specialities.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    const filtered = values.specialities.filter(
                      (sp) => sp !== s
                    );
                    setValues({ ...values, specialities: filtered });
                    setSpeciality("");
                  }}
                  className="p-2 rounded-full bg-blue-500 text-white capitalize"
                >
                  {specialities.find((sp) => sp._id === s)?.name}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="text-center mt-3">
          <button
            type="submit"
            disabled={isPending}
            className="text-white bg-blue-700 rounded-md px-4 py-2"
          >
            Submit Request
          </button>
        </div>
        <ul className="list-disc mt-3 text-sm text-gray-700">
          <li>Your profile will be verified by HealthCare.org</li>
          <li>
            After the verification you can able to login into the doctor
            dashboard
          </li>
        </ul>
      </form>
    </div>
  );
};

export default WorkDetailsPage;
