import { useLocation } from "react-router-dom";

function SuggestedSpecialists() {
  const location = useLocation();
  const specialists = location.state?.specialists || [];

  return (
    <div>
      <h2>Recommended Specialists</h2>
      {specialists.length > 0 ? (
        <ul>
          {specialists.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      ) : (
        <p>No specialists selected.</p>
      )}
    </div>
  );
}

export default SuggestedSpecialists;
