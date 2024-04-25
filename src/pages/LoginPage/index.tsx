import Background from "../../components/Background";
import Header from "../../components/Header";
import Login from "../../components/Login";

const LoginPage = () => {
  return (
    <Background>
      <div>
        <Header
          heading="Login to your account"
          paragraph="Don't have an account yet?"
          linkName="Signup"
          linkUrl="/signup"
        />

        <Login />
      </div>
    </Background>
  );
};

export default LoginPage;
