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

  background-image: url('https://s3-alpha-sig.figma.com/img/1e2c/72df/d73f0d636dc86e885735581a58b84f48?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jEgPSDcZMtZAus~8HWDKHAICs~unbvYs~VYkcEHKa7tUL~SpDvr41zHP5FWonQgR4shl6V3kJzZd0nMpZuOLcHacikVn-Shpt58ybPQFgh6t8J05Lb7JNRL~bH2PIFB8AAflgCNH64LfrVywfvhmkGaIJxvLLYN5j2fFE3RhsZL35sRbVNPpXI5kom0D9qIEnIwf1oWGC4kMpxT~CqhH2TRqW5ad-f4li81bP3LkvL03Fyc6ATFP8vi4tiO-506ZhYSpNll4WS7b2mrOmDwvlMBLOMHK0jum3v1DrlkMg-SXRBioAX6FlVbqH861XFkUSE~2f-GBtuuq1qnNniCafQ__');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 235%;

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 1024px) {
    background-size: 300%;
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
