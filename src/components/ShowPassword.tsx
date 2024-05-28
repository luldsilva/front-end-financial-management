import { ChangeEvent } from "react";

interface ShowPasswordProps {
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
}

const ShowPassword: React.FC<ShowPasswordProps> = ({
  showPassword,
  setShowPassword,
}) => {
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowPassword(e.target.checked);
  };
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <input
          id="show-password"
          name="show-password"
          type="checkbox"
          checked={showPassword}
          onChange={handleCheckboxChange}
          className="form-checkbox text-medium-blue focus:ring-medium-blue h-4 w-4 rounded"
        />
        <label
          htmlFor="show-password"
          className="ml-2 block text-sm text-medium-grey"
        >
          Mostrar senha
        </label>
      </div>
    </div>
  );
};
export default ShowPassword;
