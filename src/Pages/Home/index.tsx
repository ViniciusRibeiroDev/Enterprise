import { Header } from '../../Components/Global/Header';
import { InterpriseList } from '../../Components/Home/InterpriseList';
import { SearchForm } from '../../Components/Home/SearchForm';
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
