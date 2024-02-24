interface InputFormProps {
  inputs: string[];
  styles?: string;
  color?: string;
  onInputChange: (index: number, value: string) => void;
  onBlur?: () => void;
}

export default function InputForm({
  inputs,
  styles,
  color = "dark",
  onInputChange,
  onBlur,
}: InputFormProps) {
  return (
    <div>
      {inputs.map((input, index) => (
        <input
          type={input === "Password" ? "password" : "text"}
          className={styles}
          key={index}
          placeholder={input}
          style={{borderColor: color}}
          onChange={(e) => onInputChange(index, e.target.value)}
          onBlur={onBlur}
        />
      ))}
    </div>
  );
}
