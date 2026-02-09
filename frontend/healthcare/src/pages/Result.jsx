import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state || {};
  const { level, advice } = data;

  const getColor = () => {
    if (level === "HIGH") return "red";
    if (level === "MEDIUM") return "orange";
    return "green";
  };

  return (
    <div className="result">
      <h2>Triage Result</h2>

      {level ? (
        <>
          <h3 style={{ color: getColor() }}>
            Risk Level: {level}
          </h3>

          <p>{advice}</p>

          {level === "HIGH" && (
            <div className="alert">
              ⚠️ Seek medical help immediately
            </div>
          )}
        </>
      ) : (
        <p>No result available.</p>
      )}

      <button onClick={() => navigate("/home")}>
        Check Again
      </button>
    </div>
  );
};

export default Result;
