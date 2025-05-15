import { useLocation,useNavigate } from "react-router-dom";
import "../suggestion.css";
function SuggestedSpecialists() {

  const navigate=useNavigate();
  const location = useLocation();
  const specialists = location.state?.specialists || [];
  console.log("Received specialists:", specialists);
  return (
    <div >
      <h2 style={{ marginBottom: "2rem" }}>Recommended Specialists</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
      {specialists.length > 0 ? (
        <div >
          <div className="canvas-wrapper">
            {specialists.map((s, i) => (
              <a className="canvas" key={i} href={s.appointmentLink} target="_blank" rel="noopener noreferrer">
                <div className="canvas_border">
                  <svg viewBox="0 0 400 400" preserveAspectRatio="none">
                    <rect className="rect-gradient" height="100%" width="100%" stroke="#000" strokeWidth="2" fill="none" />
                  </svg>
                </div>

                <div className="canvas_img-wrapper">
                  <img className="canvas_img" src={s.image} alt={s.name} />
                </div>

                <div className="canvas_copy canvas_copy--left">
                  <span className="canvas_copy_title">{s.name}</span>
                  <span className="canvas_copy_subtitle">{s.specialization}</span>
                  <span className="canvas_copy_details">
                    <strong>Address:</strong> {s.address}
                    <br />
                    <strong>Fee:</strong> {s.consultingFee}
                  </span>
                </div>
              </a>
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
