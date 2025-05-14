import { useLocation } from "react-router-dom";
import "../symptoms.css"; // Use your existing styles

function SuggestedSpecialists() {
  const location = useLocation();
  const specialists = location.state?.specialists || [];
  console.log("Received specialists:", specialists);
  return (
    <div className="dashboard-container">
      <h2 style={{ marginBottom: "2rem" }}>Recommended Specialists</h2>

      {specialists.length > 0 ? (
        <div className="symptom-grid">
          {specialists.map((s, i) => (
            <div className="box" key={i}>
              <div className="imgBox">
                <img src={s.image} alt={s.name} />
              </div>
              <div className="content selected">
                <h3>{s.name}</h3>
                <p><strong>Specialization:</strong> {s.specialization}</p>
                <p><strong>Address:</strong> {s.address}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No specialists selected.</p>
      )}
    </div>
  );
}

export default SuggestedSpecialists;
