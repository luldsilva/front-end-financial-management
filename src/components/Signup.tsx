import { ChangeEvent, useState } from "react";
import { signupFields } from "../constants/formFields";
import Input from "./Input";

interface fieldsState {
  id: string;
  value: string;
}

const fields = signupFields;
const fieldsState: {
  [key: string]: string;
} = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Signup = () => {
  const [signupState, setSignupState] = useState(fieldsState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupState({ ...signupState, [e.target.id]:e.target.value });
  };

  return (
    <form className="mt-8 space-y-6 mx-auto max-w-md">
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
            customClass=""
          />
        ))}
      </div>
    </form>
  );
};

export default Signup;
