import NavItem from "./NavItem";

interface NavBarProps {
  pages: string[];
}

const NavBar = ({ pages }: NavBarProps) => {
  return (
    <div
      className="d-flex justify-content-end align-items-center shadow gap-3"
      style={{
        width: "100%",
        height: "50px",
        borderRight: "1px solid gray",
        backgroundColor: "#3094CC",
      }}
    >
      <hr />
      {pages.map((page, index) => (
        <NavItem key={index} name={page} />
      ))}
      <p>Profile pic</p>
    </div>
  );
};

export default NavBar;
