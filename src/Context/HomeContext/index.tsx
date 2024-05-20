import { createContext, useEffect, useState } from 'react';
import {
  ICategory,
  ICompany,
  IHomeProvider,
  IHomeProviderProps,
} from './interface';
import { api } from '../../API';

export const HomeContext = createContext<IHomeProvider>({} as IHomeProvider);

export const HomeProvider = ({ children }: IHomeProviderProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [companies, setCompanies] = useState<ICompany[]>([]);

  useEffect(() => {
    getCategoriesAll();
    getCompaniesAll();
  }, []);

  const getCategoriesAll = async () => {
    try {
      const response = await api.get('/categories/readAll');

      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCompaniesAll = async () => {
    try {
      const response = await api.get('/companies/readAll');

      setCompanies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <HomeContext.Provider value={{ categories, companies }}>
      {children}
    </HomeContext.Provider>
  );
};
