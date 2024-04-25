
const Signup = () => {
  const inputStyle = "flex rounded-xl outline outline-offset-1 outline-blue w-[258px] h-[55px] p-2";
  const inputGiant = "flex rounded-xl outline outline-offset-1 outline-blue w-[540px] h-[55px] p-2";

  return (
    <form className="">
      <div className="flex gap-6 p-4">
        <input type="text" placeholder="Primeiro Nome" className={inputStyle} />
        <input type="text" placeholder="Sobrenome" className={inputStyle} />
      </div>
      <div className="flex gap-6 p-4">
        <input type="email" placeholder="Seu e-mail" className={inputGiant} />
      </div>
      <div className="flex flex-row gap-6 p-4">
        <input type="password" placeholder="Senha" className={inputStyle} />
        <input type="password" placeholder="Confirme sua senha" className={inputStyle} />
      </div>
      <div className="flex flex-row gap-6 ml-4 text-base text-medium-grey">
        <p>Use 8 ou mais caracteres com letras, números e símbolos.</p>
      </div>
    </form>
  );
};

export default Signup;
