import Header from "../../components/Header";
import Signup from "../../components/Signup";

const RegistrationPage = () => {
  return (
    <>
      <Header
        heading="Criar sua conta"
        paragraph="Você já possui uma conta?"
        linkName="Faça o login."
        linkUrl="/signin"
      />
      <Signup />
    </>
  );
};

export default RegistrationPage;

