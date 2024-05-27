import { ButtonHTMLAttributes } from 'react';
import { typesButton } from './ typesButton';

type TButtonType = (typeof typesButton)[number]['type'];

export interface IButtonStyledProps {
  $type: TButtonType;
  $width: string;
  $height: string;
}

export interface IButtonProps extends IButtonStyledProps {
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
