import { Enterprise } from './Enterprise';
import { EnterpriseListStyled, EnterpriseSectionStyled } from './style';

export const InterpriseList = () => {
  return (
    <EnterpriseSectionStyled>
      <h2>Lista de Empresas</h2>
      <EnterpriseListStyled>
        <Enterprise enterprise='Microsoft' sector='Tecnologia' />
        <Enterprise enterprise='Microsoft' sector='Tecnologia' />
      </EnterpriseListStyled>
    </EnterpriseSectionStyled>
  );
};
