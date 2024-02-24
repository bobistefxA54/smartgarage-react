interface ButtonProps {
    name: string;
    color?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
  }
  
  const Button = ({ name, onClick, color = "primary", onMouseEnter }: ButtonProps) => {
    return (
      <button className={"btn btn-" + color} onClick={onClick} onMouseEnter={onMouseEnter}>
        {name}
      </button>
    );
  };
  
  export default Button;  