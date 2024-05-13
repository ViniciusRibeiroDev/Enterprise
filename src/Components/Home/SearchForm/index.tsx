import { IoMdArrowDropdown } from 'react-icons/io';
import { ContainerSelectStyled, SelectStyled } from './style';

export const SearchForm = () => {
  return (
    <>
      <ContainerSelectStyled>
        <SelectStyled
          onChange={(e) => {
            console.log(e.target.value);
          }}
          name='sector'
          id='sector'
        >
          <option value='Selecionar Setor'>Selecionar Setor</option>
          <option value='test'>test</option>
        </SelectStyled>
        <IoMdArrowDropdown />
      </ContainerSelectStyled>
    </>
  );
};
