import { Header } from '../../Components/GlobalComponents/Header';
import { InterpriseList } from '../../Components/HomeComponents/InterpriseList';
import { SearchForm } from '../../Components/HomeComponents/SearchForm';
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
