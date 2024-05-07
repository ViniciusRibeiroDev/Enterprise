import { VscActivateBreakpoints } from 'react-icons/vsc';
import { ConteinerButtons, HeaderStyled, LogoStyled } from './style';
import { ButtonsRender } from './buttonsRender';

export const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled>
        <VscActivateBreakpoints />
        <h1>Enterprises</h1>
      </LogoStyled>
      <ConteinerButtons>
        <ButtonsRender />
      </ConteinerButtons>
    </HeaderStyled>
  );
};
