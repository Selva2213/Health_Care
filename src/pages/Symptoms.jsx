import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../symptoms.css"; // Import the CSS file

const symptomsData = {
  Fever: {
    image: "/fever.jpg",
    diseases: ["Flu", "COVID-19", "Malaria", "Typhoid", "Dengue"]
  },
  Cold: {
    image: "/cold.jpg",
    diseases: ["Common Cold", "Flu", "Allergic Rhinitis"]
  },
  Cough: {
    image: "/cough.jpg",
    diseases: ["Bronchitis", "COVID-19", "Asthma", "Pneumonia"]
  },
  Headache: {
    image: "/headache.jpg",
    diseases: ["Migraine", "Flu", "Tension Headache", "Sinusitis"]
  },
  Fatigue: {
    image: "/fatigue.jpg",
    diseases: ["Anemia", "Hypothyroidism", "Diabetes", "Depression"]
  },
  Nausea: {
    image: "/nausea.jpg",
    diseases: ["Food Poisoning", "Pregnancy", "Stomach Flu", "Ulcer"]
  },
  Vomiting: {
    image: "/vomit.jpg",
    diseases: ["Food Poisoning", "Gastritis", "Migraine", "Appendicitis"]
  },
  Rash: {
    image: "/rashes.jpg",
    diseases: ["Allergy", "Chickenpox", "Measles", "Eczema"]
  },
  JointPain: {
    image: "/jointpain.jpg",
    diseases: ["Arthritis", "Lupus", "Dengue", "Lyme Disease"]
  },
  ShortnessOfBreath: {
    image: "/shortness.jpg",
    diseases: ["Asthma", "COPD", "COVID-19", "Heart Failure"]
  },
  ChestPain: {
    image: "/chestpain.jpg",
    diseases: ["Heart Attack", "Angina", "Panic Attack", "GERD"]
  },
  Diarrhea: {
    image: "/diarria.jpg",
    diseases: ["Cholera", "IBS", "Food Poisoning", "Gastroenteritis"]
  },
  Constipation: {
    image: "/constipation.jpg",
    diseases: ["IBS", "Dehydration", "Hypothyroidism", "Low Fiber Diet"]
  },
  Dizziness: {
    image: "/dizziness.jpg",
    diseases: ["Vertigo", "Anemia", "Dehydration", "Low Blood Pressure"]
  },
  SoreThroat: {
    image: "/sorethroat.jpg",
    diseases: ["Strep Throat", "Common Cold", "Tonsillitis", "Flu"]
  }
};
const diseaseDetails = {
  "Flu": {
    description: "A contagious respiratory illness caused by influenza viruses.",
    specialist: "General Physician"
  },
  "COVID-19": {
    description: "An infectious disease caused by the SARS-CoV-2 virus, often affecting the lungs.",
    specialist: "Pulmonologist"
  },
  "Malaria": {
    description: "A mosquito-borne disease caused by Plasmodium parasites.",
    specialist: "Infectious Disease Specialist"
  },
  "Typhoid": {
    description: "A bacterial infection caused by Salmonella typhi, often spread through contaminated food and water.",
    specialist: "General Physician"
  },
  "Dengue": {
    description: "A mosquito-borne viral infection causing flu-like symptoms and severe joint pain.",
    specialist: "Infectious Disease Specialist"
  },
  "Common Cold": {
    description: "A viral infection of your nose and throat.",
    specialist: "General Physician"
  },
  "Allergic Rhinitis": {
    description: "An allergic response causing sneezing, congestion, and runny nose.",
    specialist: "Allergist"
  },
  "Bronchitis": {
    description: "Inflammation of the bronchial tubes, often causing persistent cough.",
    specialist: "Pulmonologist"
  },
  "Asthma": {
    description: "A condition where airways narrow and swell, producing extra mucus and difficulty breathing.",
    specialist: "Pulmonologist"
  },
  "Pneumonia": {
    description: "Infection that inflames air sacs in one or both lungs, which may fill with fluid.",
    specialist: "Pulmonologist"
  },
  "Migraine": {
    description: "A neurological condition often causing intense headaches, nausea, and sensitivity to light.",
    specialist: "Neurologist"
  },
  "Tension Headache": {
    description: "A common type of headache caused by muscle tension.",
    specialist: "General Physician"
  },
  "Sinusitis": {
    description: "Inflammation of the sinuses causing pain, congestion, and facial pressure.",
    specialist: "ENT Specialist"
  },
  "Anemia": {
    description: "A condition in which you lack enough healthy red blood cells.",
    specialist: "Hematologist"
  },
  "Hypothyroidism": {
    description: "A condition in which your thyroid gland doesn't produce enough hormones.",
    specialist: "Endocrinologist"
  },
  "Diabetes": {
    description: "A chronic condition that affects how your body turns food into energy.",
    specialist: "Endocrinologist"
  },
  "Depression": {
    description: "A mood disorder that causes persistent feelings of sadness and loss of interest.",
    specialist: "Psychiatrist"
  },
  "Food Poisoning": {
    description: "An illness caused by eating contaminated food.",
    specialist: "Gastroenterologist"
  },
  "Pregnancy": {
    description: "The condition of carrying one or more embryos or fetuses.",
    specialist: "Gynecologist"
  },
  "Stomach Flu": {
    description: "A viral infection affecting the stomach and intestines (gastroenteritis).",
    specialist: "Gastroenterologist"
  },
  "Ulcer": {
    description: "A sore that develops on the lining of the stomach or small intestine.",
    specialist: "Gastroenterologist"
  },
  "Gastritis": {
    description: "Inflammation of the stomach lining.",
    specialist: "Gastroenterologist"
  },
  "Appendicitis": {
    description: "Inflammation of the appendix, often requiring surgical removal.",
    specialist: "General Surgeon"
  },
  "Allergy": {
    description: "An immune system reaction to a foreign substance.",
    specialist: "Allergist"
  },
  "Chickenpox": {
    description: "A highly contagious viral infection causing an itchy rash and red spots.",
    specialist: "Pediatrician / Dermatologist"
  },
  "Measles": {
    description: "A highly contagious viral disease that causes a full-body skin rash and flu-like symptoms.",
    specialist: "Infectious Disease Specialist"
  },
  "Eczema": {
    description: "A condition that makes your skin red and itchy.",
    specialist: "Dermatologist"
  },
  "Arthritis": {
    description: "Inflammation of one or more joints, causing pain and stiffness.",
    specialist: "Rheumatologist"
  },
  "Lupus": {
    description: "An autoimmune disease that attacks your own tissues and organs.",
    specialist: "Rheumatologist"
  },
  "Lyme Disease": {
    description: "A bacterial infection transmitted by tick bites.",
    specialist: "Infectious Disease Specialist"
  },
  "COPD": {
    description: "A chronic inflammatory lung disease that causes obstructed airflow.",
    specialist: "Pulmonologist"
  },
  "Heart Failure": {
    description: "A condition where the heart can't pump blood efficiently.",
    specialist: "Cardiologist"
  },
  "Heart Attack": {
    description: "A blockage of blood flow to the heart muscle.",
    specialist: "Cardiologist"
  },
  "Angina": {
    description: "Chest pain caused by reduced blood flow to the heart muscles.",
    specialist: "Cardiologist"
  },
  "Panic Attack": {
    description: "A sudden episode of intense fear or anxiety with physical symptoms.",
    specialist: "Psychiatrist"
  },
  "GERD": {
    description: "A digestive disorder where stomach acid irritates the esophagus.",
    specialist: "Gastroenterologist"
  },
  "Cholera": {
    description: "A severe diarrheal disease caused by infection of the intestine.",
    specialist: "Infectious Disease Specialist"
  },
  "IBS": {
    description: "Irritable Bowel Syndrome is a disorder affecting the large intestine.",
    specialist: "Gastroenterologist"
  },
  "Gastroenteritis": {
    description: "Inflammation of the stomach and intestines, typically due to infection.",
    specialist: "Gastroenterologist"
  },
  "Dehydration": {
    description: "A condition resulting from excessive loss of body water.",
    specialist: "General Physician"
  },
  "Low Fiber Diet": {
    description: "A diet lacking in sufficient fiber can cause digestive issues like constipation.",
    specialist: "Dietitian / Gastroenterologist"
  },
  "Vertigo": {
    description: "A sensation of spinning or dizziness, often caused by inner ear issues.",
    specialist: "ENT Specialist / Neurologist"
  },
  "Low Blood Pressure": {
    description: "A condition in which blood pressure is lower than normal, causing dizziness or fainting.",
    specialist: "Cardiologist"
  },
  "Strep Throat": {
    description: "A bacterial infection that causes inflammation and pain in the throat.",
    specialist: "ENT Specialist"
  },
  "Tonsillitis": {
    description: "Inflammation of the tonsils, typically due to viral or bacterial infections.",
    specialist: "ENT Specialist"
  }
};
function Dashboard() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [selectedSpecialists, setSelectedSpecialists] = useState([]);
  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const matchedDiseases = () => {
    const countMap = {};
    selectedSymptoms.forEach((s) => {
      symptomsData[s].diseases.forEach((d) => {
        countMap[d] = (countMap[d] || 0) + 1;
      });
    });
    return Object.entries(countMap)
      .sort((a, b) => b[1] - a[1])
      .map(([d]) => d);
  };
useEffect(() => {
  const diseaseList = matchedDiseases();
  const specialistSet = new Set();

  diseaseList.forEach((disease) => {
    const details = diseaseDetails[disease];
    if (details?.specialist) {
      specialistSet.add(details.specialist);
    }
  });

  setSelectedSpecialists([...specialistSet]);
}, [selectedSymptoms]);
const navigate=useNavigate();
  return (
    <div className="dashboard-container">
      <h2>Select Your Symptoms</h2>
      <div className="symptom-grid">
        {Object.keys(symptomsData).map((symptom) => {
          const { image } = symptomsData[symptom];
          const isSelected = selectedSymptoms.includes(symptom);
          return (
            <div className="box" key={symptom} onClick={() => toggleSymptom(symptom)}>
              <div className="imgBox">
                <img src={image} alt={symptom} />
              </div>
              <div className={`content ${isSelected ? "selected" : ""}`}>
                <div>
                  <h2>{symptom}</h2>
                  <span>{symptomsData[symptom].diseases.length} related diseases</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedSymptoms.length > 0 && (
        <>
          <h3 style={{ marginTop: "4rem", fontSize: "2rem" }}>Possible Diseases</h3>
          <div className="diseases-list">
           {matchedDiseases().map((disease, index) => {
              const details = diseaseDetails[disease] || {};
              return (
                <div className="disease-card" key={index}>
                  <h4>{disease}</h4>
                  {details.description && <p>{details.description}</p>}
                  {details.specialist && <p><strong>Specialist:</strong> {details.specialist}</p>}
                </div>
                );
                })}
          </div>
        </>
      )}
      <button onClick={()=>navigate("/suggestion",{state:{specialists:selectedSpecialists}})}>Suggestions for you</button>
    </div>
  );
}
  

export default Dashboard;
