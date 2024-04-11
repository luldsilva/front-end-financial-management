import { ChangeEvent } from "react";

const fixedInputClass =
  "rounded-xl outline outline-offset-1 outline-blue w-[258px] h-8";

interface inputProps {
  handleChange: (content: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  labelText: string;
  labelFor: string;
  id: string;
  name: string;
  type: string;
  isRequired: boolean;
  placeholder: string;
}
const Input = ({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired,
  placeholder,
}: inputProps) => {
  return (
    <div className="my-5">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={fixedInputClass}
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
