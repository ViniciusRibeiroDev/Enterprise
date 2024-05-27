import { Header } from '../../Components/GlobalComponents/Header';
import { LoginForm } from '../../Components/LoginComponents/LoginForm';
import { BackgroundLoginPageStyled } from './style';

export const LoginPage = () => {
  return (
    <>
      <Header />
      <BackgroundLoginPageStyled>
        <LoginForm />
      </BackgroundLoginPageStyled>
    </>
  );
};
