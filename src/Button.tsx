interface ButtonProps {
  name: string;
  color?: string;
  disabled?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
}

const Button = ({
  name,
  color = "primary",
  disabled = false,
  onClick,
  onMouseEnter,
}: ButtonProps) => {
  return (
    <button
      className={"text-light btn btn-" + color}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default Button;
