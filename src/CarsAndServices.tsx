import OfferedServices from "./OfferedServices";
import Cars from "./Cars";

const CarsAndServices = () => {
  return (
    <div
      className="p-2 d-flex flex-column gap-3"
      style={{ backgroundColor: "#D3D3D4" }}
    >
      <OfferedServices />
      <Cars />
    </div>
  );
};

export default CarsAndServices;
