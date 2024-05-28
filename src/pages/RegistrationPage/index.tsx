import Header from "../../components/Header";
import Signup from "../../components/Signup";
import Background from "../../components/Background";

const RegistrationPage = () => {
  return (
    <>
      <Background>
        <Header
          heading="Criar sua conta"
          paragraph="Você já possui uma conta?"
          linkName="Faça o login."
          linkUrl="/signin"
        />
        <Signup />
      </Background>
    </>
  );
};

export default RegistrationPage;

