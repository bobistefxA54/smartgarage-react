import NavItem from "./NavItem";

interface NavBarProps {
  pages: string[];
}

const NavBar = ({ pages }: NavBarProps) => {
  return (
    <div
      className="d-flex flex-column align-items-center shadow gap-3"
      style={{
        width: "20vh",
        borderRight: "1px solid gray",
        backgroundColor: "#f5f5f5",
      }}
    >
      <hr />
      {pages.map((page, index) => (
        <NavItem key={index} name={page} />
      ))}
    </div>
  );
};

export default NavBar;
