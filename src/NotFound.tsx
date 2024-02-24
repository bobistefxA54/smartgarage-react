import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column gap-2">
      NotFound
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
