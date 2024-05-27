import styled from 'styled-components';

export const ConteinerStyled = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 3%;
  padding-bottom: 3%;

  width: 100vw;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ConteinerImgStyled = styled.div`
  width: 550px;
  height: 854px;

  margin-left: 5%;

  background-image: url('src/Assets/Img/background.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1400px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CointeinerFormStyled = styled.div`
  width: 550px;
  height: 854px;

  display: flex;
  flex-direction: column;

  gap: 30px;

  margin-right: 5%;

  @media (max-width: 768px) {
    margin-right: 2%;
    margin-left: 2%;
  }
`;
