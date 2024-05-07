import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;
  width: 100vw;

  border-bottom: 1px solid var(--grey3);
`;

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  margin-left: 5%;

  svg {
    color: blue;
    font-size: 25px;
  }

  h1 {
    font-size: 20px;
    font-weight: bolder;
  }
`;

export const ConteinerButtons = styled.div`
  display: flex;
  gap: 10px;

  margin-right: 5%;
`;
