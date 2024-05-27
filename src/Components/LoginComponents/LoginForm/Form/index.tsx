import { Button } from '../../../GlobalComponents/Button';
import { Input } from '../../../GlobalComponents/Input';
import { FormStyled } from './style';

export const Form = () => {
  return (
    <FormStyled>
      <Input type='text' placeholder='Seu email' $width='99%' $height='48px' />
      <Input type='text' placeholder='Sua senha' $width='99%' $height='48px' />
      <Button
        text='Login'
        $type='default'
        type='submit'
        $height='60px'
        $width='100%'
      />
      <p>ou</p>
      <Button
        text='Cadastrar'
        $type='outlined'
        type='submit'
        $height='60px'
        $width='100%'
      />
    </FormStyled>
  );
};
