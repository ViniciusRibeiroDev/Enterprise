import { Form } from './Form';
import { ContainerFormStyled, LoginFormStyled } from './style';

export const LoginForm = () => {
  return (
    <LoginFormStyled>
      <ContainerFormStyled>
        <h2>Login</h2>
        <p>Preencha os campos para realizar o login</p>
        <Form />
      </ContainerFormStyled>
    </LoginFormStyled>
  );
};
