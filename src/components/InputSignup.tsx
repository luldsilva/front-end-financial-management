import { ChangeEvent } from "react";

const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-medium-blue placeholder-gray-500 text-medium-grey focus:outline-none focus:z-10 sm:text-sm";

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
const InputSignup = ({
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
    <div className="my-2">
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
export default InputSignup;
