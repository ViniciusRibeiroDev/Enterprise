import styled from 'styled-components';
import { IInputStyledProps } from './interface';

export const InputStyled = styled.input<IInputStyledProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
