import CustomerHomeContent from "./CustomerHomeContent";
import NavBar from "./NavBar";

const Layout = () => {
  const pages = ["home", "login", "register"];

  return (
    <div className="d-flex gap-5 vh-100">
      <NavBar pages={pages} />
      <CustomerHomeContent />
    </div>
  );
};

export default Layout;
