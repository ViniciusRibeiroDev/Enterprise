import styled from 'styled-components';

export const ContainerSelectStyled = styled.div`
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;

  background: var(--brand1);
  color: var(--white);

  width: 100%;
  height: 52px;

  svg {
    position: absolute;
    right: 3%;

    font-size: 40px;
  }
`;

export const SelectStyled = styled.select`
  background: none;
  color: var(--white);

  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0 0 0 3%;

  border: none;

  outline: none;
  appearance: none;

  position: absolute;

  z-index: 1;

  cursor: pointer;

  option {
    background: var(--brand1);

    padding: 20px;
  }
`;
