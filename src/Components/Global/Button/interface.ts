import { typesButton } from './ typesButton';

type TType = 'button' | 'submit' | 'reset' | undefined;

type TButtonType = (typeof typesButton)[number]['type'];

export interface IButtonStyledProps {
  $type: TButtonType;
  $width: string;
  $height: string;
}

export interface IButtonProps extends IButtonStyledProps {
  type: TType;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
