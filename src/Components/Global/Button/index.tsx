import { IButtonProps } from './interface';
import { ButtonStyled } from './style';

export const Button = ({
  type,
  text,
  $type,
  $height,
  $width,
}: IButtonProps) => {
  return (
    <ButtonStyled type={type} $type={$type} $height={$height} $width={$width}>
      {text}
    </ButtonStyled>
  );
};
