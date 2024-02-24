interface LogoProps {
  name: string;
}

const Logo = ({ name }: LogoProps) => {
  return (
    <div>
      <h1 className="text-center">{name}</h1>
    </div>
  );
};

export default Logo;
