import { Link } from "react-router-dom";
import Button from "./Button";

interface NavItemProps {
  name: string;
  active?: boolean;
}

const NavItem = ({ name, active }: NavItemProps) => {
  return (
    <div>
      <Link to={name} className={active ? "active" : ""}>
        <Button name={name.toUpperCase()} color="" />
      </Link>
    </div>
  );
};

export default NavItem;
