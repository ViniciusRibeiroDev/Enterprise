import { IInputProps } from './interface';
import { InputStyled } from './style';

export const Input = ({ placeholder, type, $height, $width }: IInputProps) => {
  return (
    <>
      <InputStyled
        placeholder={placeholder}
        type={type}
        $width={$width}
        $height={$height}
      />
    </>
  );
};
