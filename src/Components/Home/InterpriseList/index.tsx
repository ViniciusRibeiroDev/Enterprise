import { useContext } from 'react';
import { HomeContext } from '../../../Context/HomeContext';
import { Enterprise } from './Enterprise';
import { EnterpriseListStyled, EnterpriseSectionStyled } from './style';

export const InterpriseList = () => {
  const { categories, companies } = useContext(HomeContext);

  const enterprise = [
    ...companies.map((company) => {
      return {
        id: company.id,
        name: company.name,
        description: company.description,
        category: categories.filter(
          (category) => category.id === company.category_id
        )[0].name,
      };
    }),
  ];

  return (
    <EnterpriseSectionStyled>
      <h2>Lista de Empresas</h2>
      <EnterpriseListStyled>
        {enterprise.map((enterprise) => (
          <Enterprise
            enterprise={enterprise.name}
            sector={enterprise.category}
            key={enterprise.id}
          />
        ))}
      </EnterpriseListStyled>
    </EnterpriseSectionStyled>
  );
};
