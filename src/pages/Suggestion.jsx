import { useLocation, useNavigate } from "react-router-dom";
import "../suggestion.css";
function SuggestedSpecialists() {

  const navigate = useNavigate();
  const location = useLocation();
  const specialists = location.state?.specialists || [];
  console.log("Received specialists:", specialists);
  return (
    <div >
      <h2 style={{ marginBottom: "2rem" }}>Recommended Specialists</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
      {specialists.length > 0 ? (
        <div >
          <div className="container">
            {specialists.map((s, i) => (
              <div className="card" key={i}>
                {/* Face 1: Info Side */}
                <div className="face face1">
                  <div className="xyz">
                    <h2 className="java">{s.name}</h2>
                    <p><strong>Specialization:</strong> {s.specialization}</p>
                    <p><strong>Address:</strong> {s.address}</p>
                    <p><strong>Fee:</strong> {s.consultingFee}</p>
                    <a
                      href={s.appointmentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        marginTop: "10px",
                        padding: "8px 16px",
                        background: "#fff",
                        borderRadius: "8px",
                        textDecoration: "none",
                        color: "#000",
                        fontWeight: "bold",
                      }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>

                {/* Face 2: Decorative Side */}
                <div className="face face2">
                  <h2>{s.specialization}</h2>
                </div>
              </div>
            ))}
          </div>


        </div>

      ) : (
        <p>No specialists selected.</p>
      )}

    </div>
  );
}

export default SuggestedSpecialists;
