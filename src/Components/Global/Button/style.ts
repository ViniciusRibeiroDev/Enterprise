import styled from 'styled-components';
import { IButtonStyledProps } from './interface';
import { typesButton } from './ typesButton';

export const ButtonStyled = styled.button<IButtonStyledProps>`
  font-size: var(--title2);
  font-weight: bold;
  font-family: 'Inter', sans-serif;

  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  color: ${({ $type }) =>
    typesButton.map((button) => {
      if (button.type === $type) {
        return button.color;
      }
    })};
  background: ${({ $type }) =>
    typesButton.map((button) => {
      if (button.type === $type) {
        return button.background;
      }
    })};
  border: ${({ $type }) =>
    typesButton.map((button) => {
      if (button.type === $type) {
        return button.border;
      }
    })};

  &:hover {
    background: ${({ $type }) =>
      typesButton.map((button) => {
        if (button.type === $type) {
          return button.hover.background;
        }
      })};
    border: ${({ $type }) =>
      typesButton.map((button) => {
        if (button.type === $type) {
          return button.hover.border;
        }
      })};
  }

  &:focus {
    background: ${({ $type }) =>
      typesButton.map((button) => {
        if (button.type === $type) {
          return button.focus.background;
        }
      })};
    color: ${({ $type }) =>
      typesButton.map((button) => {
        if (button.type === $type) {
          return button.focus.color;
        }
      })};
    border: ${({ $type }) =>
      typesButton.map((button) => {
        if (button.type === $type) {
          return button.focus.border;
        }
      })};
  }
`;
