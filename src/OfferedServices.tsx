import axios from "axios";
import { useEffect, useState } from "react";

interface Services {
  name: string;
  index: number;
}

const OfferedServices = () => {
  const [services, setServices] = useState<Services[]>([]);
  const fetchOfferedServices = async () => {
    try {
      const response = await axios.get("http://localhost:5282/api/services");
      const data = response.data;
      console.log("Offered services:", data);
      setServices(data);
    } catch (error) {
      console.error("Offered services fetch error:", error);
    }
  };

  useEffect(() => {
    fetchOfferedServices();
  }, []);

  return (
    <div className="p-2" style={{ backgroundColor: "#E5E6E7" }}>
      <h6>Offered Services</h6>
      <hr />
      {services.length !== 0 && (
        <ul>
          {services.map((service, index) => (
            <li key={index}>{service.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OfferedServices;
