import styled from 'styled-components';

export const EnterpriseSectionStyled = styled.section`
  display: flex;
  flex-direction: column;

  gap: 30px;

  width: 100%;
  height: 100%;

  box-shadow: 0 0 10px;

  h2 {
    margin-top: 5%;
    margin-left: 5%;

    font-weight: bold;
    font-size: var(--title1);
  }
`;

export const EnterpriseListStyled = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;
