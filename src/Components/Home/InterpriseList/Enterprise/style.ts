import styled from 'styled-components';

export const EnterpriseStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  padding-left: 3%;

  gap: 20px;

  border: 1px solid var(--brand1);

  height: 116px;

  margin-left: 5%;
  margin-right: 5%;

  h3 {
    font-size: var(--title2);
    font-weight: bold;
  }

  span {
    padding: 5px;

    width: auto;

    font-size: var(--text1);

    color: var(--brand1);

    border: solid 1px var(--brand1);
    border-radius: 25%;
  }
`;
