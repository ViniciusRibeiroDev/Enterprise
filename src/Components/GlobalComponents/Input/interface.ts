import { HTMLInputTypeAttribute } from 'react';

export interface IInputStyledProps {
  $width: string;
  $height: string;
}

export interface IInputProps extends IInputStyledProps {
  placeholder: string;
  type: HTMLInputTypeAttribute;
}
