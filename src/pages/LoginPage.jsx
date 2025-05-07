import InputBar from "../components/InputBar.jsx";
import { useState } from "react";
import PasswordField from "../components/PasswordField.jsx";
import { Link } from "react-router-dom";
import { validateObject } from "../util/validateObject.js";
import { toast } from "sonner";
import useAuth from "../hooks/use-auth.js";
import { FcGoogle } from "react-icons/fc";
import { BASE_URL } from "../lib/axios.js";
import Loader from "../components/Loader.jsx";

const LoginPage = () => {
  const { loginUser, loading } = useAuth();
  let [formData, setFormData] = useState({ emailAddress: "", password: "" });

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
    await loginUser({
      email: formData.emailAddress,
      password: formData.password,
    });
  };

  return (
    <div className="grid place-items-center h-screen bg-gradient-to-r from-indigo-900 via-blue-600 to-cyan-400">
      <div className="rounded-md w-[400px] bg-slate-100 border-black p-10 shadow-gray-500 shadow-lg">
        <div className="flex justify-center items-center relative w-full mb-5">
          <button className="absolute left-0 top-1">
            <Link
              to="/"
              replace
              className="py-2 px-3 bg-gray-300 text-blue-700 rounded-lg text-sm"
            >
              Back
            </Link>
          </button>
          <h1 className="text-2xl text-blue-700 font-semibold">Log in</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-3 grid place-items-center"
        >
          <InputBar
            labelName={"Email address"}
            forVal={"email-address"}
            typeVal={"text"}
            idVal={"email-address"}
            nameVal={"emailAddress"}
            value={formData.emailAddress}
            handleChange={handleInputChange}
          />
          <PasswordField
            labelName={"Password"}
            forVal={"password"}
            typeVal={"password"}
            idVal={"password"}
            nameVal={"password"}
            value={formData.password}
            handleChange={handleInputChange}
          />
          <button className="hover:underline text-right cursor-pointer text-[.8rem] font-semibold w-full">
            forgot your password?
          </button>
          <button
            type="submit"
            disabled={loading}
            className="py-2 px-24 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-sm shadow-gray-400 w-full flex justify-center"
          >
            {loading ? <Loader clip={true} /> : "Login"}
          </button>
        </form>

        <div className="grid place-items-center space-y-3 mt-3">
          <p className="text-sm">(OR)</p>
          <Link
            to={BASE_URL + "/auth/google/callback"}
            className="flex items-center justify-center gap-2 bg-gray-300 text-blue-700 py-2 px-4 rounded-md w-full"
          >
            <FcGoogle size={"1.3rem"} />
            <span>Login with Google</span>
          </Link>

          <p className="text-[0.8rem] text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="underline font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
