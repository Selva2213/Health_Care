import { useState } from "react";
import InputBar from "../components/InputBar.jsx";
import PasswordField from "../components/PasswordField.jsx";
import CheckBox from "../components/CheckBox.jsx";
import { Link } from "react-router-dom";
import { validateObject } from "../util/validateObject.js";
import { toast } from "sonner";
import useAuth from "../hooks/use-auth.js";
import Loader from "../components/Loader.jsx";

const SignUpPage = () => {
  const { registerUser, loading } = useAuth();
  let [formData, setFormData] = useState({
    email: "",
    password: "",
    city: "",
    phone: "",
    gender: "",
    fullname: "",
  });
  let [checkedOption, setCheckedOption] = useState("PATIENT");

  const handleInputChange = (event) => {
    setFormData((currFormData) => ({
      ...currFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error } = validateObject(formData);
    if (error) {
      toast.error(error);
      return;
    }
    const registerData = { ...formData, role: checkedOption };
    await registerUser(registerData);
  };

  const handleChecked = (event) => {
    event.target.checked = event.target.name === checkedOption;
  };

  return (
    <div className="grid place-items-center h-screen bg-gradient-to-r from-indigo-900 via-blue-600 to-cyan-400 overflow-y-auto py-6">
      <div className="p-6 w-[450px] rounded-md bg-slate-100 border-black shadow-gray-500 shadow-lg transition-all duration-[.5s]">
        <div className="relative text-center w-full mb-5">
          <button className="absolute left-0 top-1">
            <Link
              to="/"
              replace
              className="py-2 px-3 bg-gray-300 text-blue-700 rounded-lg text-sm"
            >
              Back
            </Link>
          </button>
          <h1 className="text-2xl text-blue-700 font-semibold">
            Create an Account
          </h1>
          <p className="text-[0.8rem] mb-2">
            Already have an account?{" "}
            <Link to="/login" className="underline font-bold">
              Log in
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1 items-center mb-3">
            <div className="flex gap-4 text-[0.8rem]">
              <CheckBox
                value={"As Patient"}
                nameAtt={"PATIENT"}
                idAtt={"PATIENT"}
                handler={handleChecked}
                setter={setCheckedOption}
                checkedOption={checkedOption}
              />
              <CheckBox
                value={"As Doctor"}
                nameAtt={"DOCTOR"}
                idAtt={"DOCTOR"}
                handler={handleChecked}
                setter={setCheckedOption}
                checkedOption={checkedOption}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 mb-4">
            <InputBar
              labelName={"Full Name"}
              forVal={"fullname"}
              typeVal={"text"}
              idVal={"fullname"}
              nameVal={"fullname"}
              value={formData.fullname}
              handleChange={handleInputChange}
            />
            <InputBar
              labelName={"Email address"}
              forVal={"email"}
              typeVal={"email"}
              idVal={"email"}
              nameVal={"email"}
              value={formData.email}
              handleChange={handleInputChange}
            />
            <InputBar
              labelName={"Phone Number"}
              forVal={"phone"}
              typeVal={"tel"}
              idVal={"phone"}
              nameVal={"phone"}
              value={formData.phone}
              pattern={"[0-9]{10}"}
              title={"Enter valid phone number"}
              handleChange={handleInputChange}
            />
            <div className="w-full mb-4">
              <label className="text-[0.85rem] text-blue-500 font-500 text-left">
                Gender
              </label>
              <div className="flex items-center gap-8 my-2 px-1">
                <div className="flex gap-2 items-center">
                  <label
                    htmlFor="male"
                    className="text-gray-700 font-700 text-left"
                  >
                    Male
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value={"MALE"}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <label
                    htmlFor="female"
                    className="text-gray-700 font-700 text-left"
                  >
                    Female
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value={"FEMALE"}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <PasswordField
              labelName={"Password"}
              forVal={"password"}
              typeVal={"password"}
              idVal={"password"}
              nameVal={"password"}
              value={formData.password}
              handleChange={handleInputChange}
            />
            <InputBar
              labelName={"City"}
              forVal={"city"}
              typeVal={"text"}
              idVal={"city"}
              nameVal={"city"}
              value={formData.city}
              handleChange={handleInputChange}
            />
          </div>
          <div className="mt-5">
            <button
              disabled={loading}
              type="submit"
              className="py-2 px-4 w-full rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-sm shadow-gray-400"
            >
              {loading ? <Loader clip={true} /> : "Create an account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
