import CarsAndServices from "./CarsAndServices";
import MapAndInfo from "./MapAndInfo";

const CustomerHomeContent = () => {
  return (
    <div className="d-flex p-5 border border-dark" style={{ width: "70vh" }}>
      <CarsAndServices />
      <MapAndInfo />
    </div>
  );
};

export default CustomerHomeContent;
