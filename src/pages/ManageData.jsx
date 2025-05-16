import React, { useState } from "react";
import SymptomsCRUD from "./SymptomsCRUD";
import DiseasesCRUD from "./DiseaseCRUD";
import DoctorsCRUD from "./DoctorsCRUD";
// import "../styles/AdminDashboard.css";

function ManageData() {
  const [activeTab, setActiveTab] = useState("symptoms");

  return (
    <div className="admin-container">
      <h1>Manage Health Data</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab("symptoms")}>Symptoms</button>
        <button onClick={() => setActiveTab("diseases")}>Diseases</button>
        <button onClick={() => setActiveTab("doctors")}>Doctors</button>
      </div>

      <div className="tab-content">
        {activeTab === "symptoms" && <SymptomsCRUD />}
        {activeTab === "diseases" && <DiseaseCRUD />}
        {activeTab === "doctors" && <DoctorsCRUD />}
      </div>
    </div>
  );
}

export default ManageData;
