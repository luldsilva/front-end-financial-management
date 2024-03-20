export const Login = () => {
  return (
    <div className="container w-[1016] h-[788] flex flex-col bg-grey  m-12 p-4 rounded-xl">
      <h1 className="text-[32px] text-dark-grey ml-6">Criar sua conta</h1>
      <p className="text-[16px] text-dark-grey ml-6">
        Você já possui uma conta?{" "}
        <a className="text-[16px] text-black underline" href="#">Faça o login.</a>
      </p>
      <form className="flex p-4">
        <div className="flex flex-col p-4">
          <label>Primeiro Nome</label>
          <input
            type="text"
            className="w-[258] h-[55] rounded-xl"
          ></input>
        </div>
        <div className="flex flex-col p-4">
          <label>Sobrenome</label>
          <input
            type="text"
            className="w-[258] h-[55] rounded-xl"
          ></input>
        </div>
      </form>
    </div>
  );
};
