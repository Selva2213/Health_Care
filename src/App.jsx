import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import AuthenticatedRoute from "./components/AuthenticatedRoute.jsx";
import AboutPage from "./pages/about.jsx";
import D_dash_patientList from "./pages/D_dash_patientList.jsx";
import AptSuccess from "./pages/AptSuccess.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import SearchPage from "./pages/Search.jsx";
import ProfilePage from "./pages/Profile.jsx";
import NotFound from "./pages/NotFound.jsx";
import WorkDetailsPage from "./pages/WorkDetails.jsx";
import DoctorPage from "./pages/DoctorPage.jsx";
import BlogsPage from "./pages/Blogs.jsx";
import ReviewPage from "./pages/Review.jsx";
import PrescriptionPage from "./pages/PrescriptionPage.jsx";
import Layout from "./components/Layout.jsx";
import AppointmentPage from "./pages/AppointmentPage.jsx";
import PatientAppointments from "./pages/PatientAppointments.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          {/* <Route path="/blogs" element={<BlogsPage />} /> */}
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/prescription" element={<PrescriptionPage />} />

          <Route path="*" element={<NotFound />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={<AuthenticatedRoute />}>
            <Route path="" element={<ProfilePage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="appointments" element={<PatientAppointments />} />
            <Route path="D_dash_patient" element={<D_dash_patientList />} />
            <Route path="aptSuccess" element={<AptSuccess />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>

        {/* Protected Routes without navbar */}
        <Route path="/workdetails/:doctorId" element={<WorkDetailsPage />} />

        {/* Authentication routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
