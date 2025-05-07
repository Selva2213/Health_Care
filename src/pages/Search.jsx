import { useEffect, useMemo, useState } from "react"; // Assuming you have medicalSpecialties defined
import { useAxios } from "../hooks/use-axios";
import SpecialityCard from "../components/SpecialityCard";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import DoctorCard from "../components/DoctorCard";
import useAuth from "../hooks/use-auth";
import { toast } from "sonner";
import Footer from "../components/Footer";

function SearchPage() {
  const navigate = useNavigate();
  const { fetchData, loading } = useAxios();
  const [searchParams] = useSearchParams();
  const { data: user } = useAuth();

  const spec = searchParams.get("spec");

  const [searchQuery, setSearchQuery] = useState("");
  const [specialities, setSpecialities] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const getAllSpecialities = async () => {
    const { obj, error } = await fetchData("/specialities");
    if (error) console.log(error);
    else {
      setSpecialities(obj?.data);
      setSearchResults(obj?.data);
    }
  };

  const getDoctorsBySpec = async () => {
    const { obj, error } = await fetchData(`/specialities/getDoctors/${spec}`);
    console.log(obj);
    if (error) console.log(error);
    else {
      setDoctors(obj?.data);
      setSearchResults(obj?.data);
    }
  };

  useEffect(() => {
    getAllSpecialities();
  }, []);

  useEffect(() => {
    if (!spec) {
      setSearchResults(specialities);
      navigate("/search");
    } else {
      getDoctorsBySpec();
    }
  }, [spec]);

  const specialist = specialities.find((s) => s?.name === spec)?.term;

  useMemo(() => {
    if (searchQuery === "")
      return setSearchResults(spec ? doctors : specialities);
    let filtered;
    if (spec) {
      filtered = doctors.filter((doctor) => {
        return (
          doctor.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doctor.city.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
    } else {
      filtered = specialities.filter((spec) => {
        return (
          spec.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          spec.possibleSymptoms.some((symptom) =>
            symptom.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      });
    }
    setSearchResults(filtered);
  }, [searchQuery]);

  const handleNearBySearch = () => {
    if (user) {
      const filtered = doctors.filter((doctor) => {
        return (
          doctor.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doctor.city.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
      setSearchResults(filtered);
    } else {
      toast.info("Login or Search for the city!");
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 uppercase text-center text-blue-700">
          Search for Doctor
        </h1>
        {/* Search input */}
        <div className="flex mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              spec
                ? "Search by doctor name and city"
                : "Search by specialty or symptoms like fever, cough"
            }
            className="rounded-lg px-4 py-2 w-full focus:outline-none border border-cyan-900"
          />
        </div>
        {specialist && (
          <div className="w-full flex justify-between items-center">
            <h3 className="text-2xl text-cyan-600 capitalize my-3 font-semibold">
              All {specialist}'s
            </h3>
            <button
              className="text-blue-600 underline"
              onClick={handleNearBySearch}
            >
              Nearby Doctors
            </button>
          </div>
        )}
        {/* Display search results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {loading ? (
            <div className="h-[50vh] grid place-items-center col-span-12">
              <ClipLoader size={"2rem"} color="black" />
            </div>
          ) : (
            <>
              {searchResults.length !== 0 ? (
                spec ? (
                  searchResults.map((doctor) => (
                    <Link
                      key={doctor._id}
                      to={`/doctor?id=${doctor?._id}`}
                      className="hover:scale-105 scale-100 transition-all duration-300 ease-in-out my-2 h-full"
                      replace
                    >
                      <DoctorCard doctor={doctor} specialist={specialist} />
                    </Link>
                  ))
                ) : (
                  searchResults.map((spec) => (
                    <Link
                      key={spec._id}
                      to={`/search?spec=${spec?.name}`}
                      className="hover:scale-105 scale-100 transition-all duration-300 ease-in-out my-2 h-full"
                      replace
                    >
                      <SpecialityCard spec={spec} />
                    </Link>
                  ))
                )
              ) : (
                <p>No results</p>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
