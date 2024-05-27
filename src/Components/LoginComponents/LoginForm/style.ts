import styled from 'styled-components';

export const LoginFormStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 890px;
  height: 860px;

  margin-top: 50px;

  background-color: rgba(255, 255, 255, 0.9);
`;

export const ContainerFormStyled = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10%;

  width: 90%;
  height: 80%;

  border: solid 1px red;

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
  }

  p {
    font-size: 1.125rem;
  }
`;
