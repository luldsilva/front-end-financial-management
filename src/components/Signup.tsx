import { ChangeEvent, FormEvent, useState } from "react";
import { signupFields } from "../constants/formFields";
import InputSignup from "./InputSignup";
import ShowPassword from "./ShowPassword";
import FormAction from "./FormAction";
import Terms from "./Terms";

interface fieldsState {
  id: string;
  value: string;
}

const fields = signupFields;
const fieldsState: { [key: string]: string } = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Signup = () => {
  const [signupState, setSignupState] = useState(fieldsState);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

    if (id === "password" || id === "confirm-password") {
      if (signupState.password !== value && id === "confirm-password") {
        setErrorMessage("As senhas são diferentes.");
      } else if (
        signupState["confirm-password"] !== value &&
        id === "password"
      ) {
        setErrorMessage("As senhas são diferentes.");
      } else {
        setErrorMessage("");
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <form className="font-light">
      <div className="mt-8 mx-auto max-w-md">
        <div className="grid grid-cols-2 gap-4">
          {fields
            .filter(
              (field) => field.id === "username" || field.id === "lastname"
            )
            .map((field) => (
              <InputSignup
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
              />
            ))}
        </div>
        <div className="grid col-span-2">
          {fields
            .filter((field) => field.id === "email-address")
            .map((field) => (
              <InputSignup
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
              />
            ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {fields
            .filter(
              (field) =>
                field.id === "password" || field.id === "confirm-password"
            )
            .map((field) => (
              <InputSignup
                key={field.id}
                handleChange={handleChange}
                value={signupState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={showPassword ? "text" : "password"}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            ))}
        </div>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2 col-span-2">{errorMessage}</p>
        )}
        <ShowPassword
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <Terms />
        <FormAction type="submit" onClick={handleSubmit} text="Criar conta" />
      </div>
    </form>
  );
};

export default Signup;
