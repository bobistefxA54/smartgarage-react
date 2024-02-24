import CustomerHomeContent from "./CustomerHomeContent";
import NavBar from "./NavBar";

const Layout = () => {
  const pages = ["visits", "smartgarage", "enquiry"];

  return (
    <div
      className="d-flex flex-column align-items-center gap-5 vh-100"
      style={{ backgroundColor: "#C7C7C7" }}
    >
      <NavBar pages={pages} />
      <CustomerHomeContent />
    </div>
  );
};

export default Layout;
