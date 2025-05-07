import { useState } from "react";
import axios from "../lib/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useAxios = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function fetchData(url) {
    let error = "",
      obj = null;
    setLoading(true);
    try {
      const response = await axios.get(url);
      obj = response.data;
    } catch (e) {
      const message = e.response.data.message;
      if (message && message?.toLowerCase() === "jwt expired") {
        toast.error("Session expired!  Please login again.");
        navigate("/login", { replace: true });
      }
      error = message || "Something went wrong!";
    } finally {
      setLoading(false);
    }
    return { error, obj };
  }

  async function mutateData(url, object) {
    let error = "",
      obj = null;
    setLoading(true);
    try {
      const response = await axios.post(url, object);
      console.log(response.data);
      obj = response.data;
    } catch (e) {
      const message = e.response.data.message;
      if (message && message?.toLowerCase() === "jwt expired") {
        toast.error("Session expired!  Please login again.");
        navigate("/login", { replace: true });
      }
      error = message || "Something went wrong!";
    } finally {
      setLoading(false);
    }
    return { error, obj };
  }
  return { loading, fetchData, mutateData };
};
