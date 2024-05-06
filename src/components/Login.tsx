import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginFields } from "../constants/formFields";
import Input from "./Input";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";

interface fieldsState {
  id: string;
  value: string;
}

const fields = loginFields;
const fieldsState: { [key: string]: string } = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Login = () => {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState(fieldsState);

  //temporario apenas para submissao da atp
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    authenticateUser(loginState.emailaddress, loginState.password);
  };

  const authenticateUser = (email: string, password: string) => {
    const correctEmail = "lucaslisilva@outlook.com";
    const correctPassword = "senha123";

    //autenticar o usuario aqui
    //temporario apenas para submissao da atp
    if (email === correctEmail && password === correctPassword) {
      setShowMessage(true);
      setMessage("Login bem-sucedido!");
      navigate(`/dashboard?email=${email}`);
    } else {
      setShowMessage(true);
      setMessage("Email ou senha incorretos.");
    }
  };

  return (
    <form className="mt-8 space-y-6 mx-auto max-w-md">
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
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

      <FormExtra />
      <FormAction type="submit" onClick={handleSubmit} text="Login" />

      {/*temporario apenas para submissao da atp*/}
      {/* Pop-up de mensagem */}
      {showMessage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <p>{message}</p>
            <button onClick={() => setShowMessage(false)}>Fechar</button>
          </div>
        </div>
      )}
    </form>
  );
};
export default Login;
