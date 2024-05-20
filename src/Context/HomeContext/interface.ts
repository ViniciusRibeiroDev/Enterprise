export interface IHomeProvider {
  categories: ICategory[];
  companies: ICompany[];
}

export interface IHomeProviderProps {
  children: React.ReactNode;
}

export interface ICategory {
  id: string;
  name: string;
}

export interface ICompany {
  id: string;
  name: string;
  description: string;
  category_id: string;
}
