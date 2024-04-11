const RegistrationPage = () => {
  return (
    <>
      <div className="flex bg-grey m-12 p-4 box-content h-[789px] w-[1017px] rounded-xl">
        <form className="flex-col p-4">
          <h1 className=" text-[32px] text-dark-grey ml-6">
            Criar sua conta
          </h1>
          <p className="text-[16px] text-dark-grey ml-6 mb-6">
            Você já possui uma conta?{" "}
            <a className="text-[16px] text-black underline" href="#">
              Faça o login.
            </a>
          </p>

          <div className="flex p-2">
            <label className="flex flex-col p-2 text-[16px] text-dark-grey">
              Primeiro Nome
              <input
                type="text"
                className="rounded-xl outline outline-offset-1 outline-blue w-[258px] h-8"
              ></input>
            </label>

            <label className="flex flex-col p-2 text-[16px] text-dark-grey">
              Sobrenome
              <input
                type="text"
                className="rounded-xl outline outline-offset-1 outline-blue w-[258px] h-8"
              ></input>
            </label>
          </div>

          <div className="flex p-2">
            <label className="flex flex-col p-2 text-[16px] text-dark-grey">
              E-mail
              <input
                type="email"
                className="rounded-xl outline outline-offset-1 outline-blue w-[533px] h-8"
              ></input>
            </label>
          </div>

          <div className="flex p-2">
            <label className="flex flex-col p-2 text-[16px] text-dark-grey">
              Senha
              <input
                type="password"
                className="rounded-xl outline outline-offset-1 outline-blue w-64 h-8"
              ></input>
            </label>

            <label className="flex flex-col p-2 text-[16px] text-dark-grey">
              Confirme sua senha
              <input
                type="password"
                className="rounded-xl outline outline-offset-1 outline-blue w-64 h-8"
              ></input>
            </label>
          </div>
        </form>

        <div className="flex w-[183px] h-[176px]">
          <img src="/images/image-graphic.png"></img>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;