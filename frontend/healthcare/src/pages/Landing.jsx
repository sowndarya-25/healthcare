import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>Health Triage System</h1>
      <p>
        Check your symptoms and get quick guidance on what to do next.
      </p>

      <div className="actions">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
      </div>
    </div>
  );
};

export default Landing;
