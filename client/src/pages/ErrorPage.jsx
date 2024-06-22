import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <Button onClick={() => navigate("/")}>Go Back Home</Button>
      </div>
    </>
  );
};

export default ErrorPage;
