import Alert from "react-bootstrap/Alert";

const Notify = ({ variant = "danger", message }) => {
  return (
    <>
      <Alert variant={variant}>{message}</Alert>
    </>
  );
};

export default Notify;
