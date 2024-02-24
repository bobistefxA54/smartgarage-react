interface ButtonProps {
  name: string;
  color?: string;
  disabled?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
}

const Button = ({
  name,
  onClick,
  color = "primary",
  onMouseEnter,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={"btn btn-" + color}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;
