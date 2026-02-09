import SymptomForm from "../components/SymptomForm";

const Home = () => {
  return (
    <div className="home">
      <h2>Enter Your Symptoms</h2>
      <p>Please provide accurate details for better assessment.</p>

      <SymptomForm />
    </div>
  );
};

export default Home;
