import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container" style={{textAlign: "center", padding: "4rem 1rem"}}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Button variant="primary" onClick={() => navigate("/")}>Go Home</Button>
    </div>
  );
};

export default NotFound;
