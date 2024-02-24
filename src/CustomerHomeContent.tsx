import CarsAndServices from "./CarsAndServices";
import MapAndInfo from "./MapAndInfo";

const CustomerHomeContent = () => {
  return (
    <div className="d-flex gap-2" style={{ width: "50%" }}>
      <CarsAndServices />
      <MapAndInfo />
    </div>
  );
};

export default CustomerHomeContent;
