import { Button } from '../Button';
import { HeaderStyled } from './style';

export const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <span>°</span>
        <h1>Enterprises</h1>
      </div>
      <div>
        <Button
          type='button'
          text='Login'
          $height='48px'
          $width='142px'
          $type='outlined'
        />
        <Button
          text='Cadastro'
          $height='48px'
          $width='142px'
          type='button'
          $type='default'
        />
      </div>
    </HeaderStyled>
  );
};
