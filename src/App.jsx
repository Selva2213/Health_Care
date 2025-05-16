import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import AboutPage from "./pages/about.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import SearchPage from "./pages/Symptoms.jsx";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./components/Layout.jsx";
import Errorpage from "./pages/Errorpage.jsx";
import Suggestion from "./pages/Suggestion.jsx";
import ManageData from "./pages/ManageData.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/symptoms" element={<SearchPage />} />
          <Route path="/error" element={<Errorpage/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/suggestion" element={<Suggestion/>}/> 
          <Route path="/admin" element={<ManageData/>} />      
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
