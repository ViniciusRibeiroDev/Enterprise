import { Header } from '../../Components/Global/Header';
import { InterpriseList } from '../../Components/HomeComponenets/InterpriseList';
import { SearchForm } from '../../Components/HomeComponenets/SearchForm';
import {
  CointeinerFormStyled,
  ConteinerStyled,
  ConteinerImgStyled,
} from './style';

export const HomePage = () => {
  return (
    <>
      <Header />
      <ConteinerStyled>
        <ConteinerImgStyled />
        <CointeinerFormStyled>
          <SearchForm />
          <InterpriseList />
        </CointeinerFormStyled>
      </ConteinerStyled>
    </>
  );
};
