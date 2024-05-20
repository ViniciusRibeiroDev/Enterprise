import { IEnterpriseProps } from './interface';
import { EnterpriseStyled } from './style';

export const Enterprise = ({ enterprise, sector }: IEnterpriseProps) => {
  return (
    <EnterpriseStyled>
      <h3>{enterprise}</h3>
      <span>{sector}</span>
    </EnterpriseStyled>
  );
};
