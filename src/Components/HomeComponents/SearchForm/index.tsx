import { IoMdArrowDropdown } from 'react-icons/io';
import { ContainerSelectStyled, SelectStyled } from './style';
import { useContext } from 'react';
import { HomeContext } from '../../../Context/HomeContext';

export const SearchForm = () => {
  const { categories } = useContext(HomeContext);

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
          {categories.map((sector) => (
            <option key={sector.id} value={sector.name}>
              {sector.name}
            </option>
          ))}
        </SelectStyled>
        <IoMdArrowDropdown />
      </ContainerSelectStyled>
    </>
  );
};
