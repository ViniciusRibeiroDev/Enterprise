import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createContext } from 'react';
import axios from 'axios';
import { ILoginProvider, ILoginProviderProps, TLoginForm } from './interface';
import { api } from '../../API';
import { useYupValidationResolver } from './resolver';
import { LoginSchema } from './schema';

export const LoginContext = createContext<ILoginProvider>({} as ILoginProvider);

export const LoginProvider = ({ children }: ILoginProviderProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: useYupValidationResolver(LoginSchema) });

  const navigate = useNavigate();

  const postLogin = async (data: TLoginForm) => {
    try {
      const response = await api.post('/auth/login', data);

      localStorage.setItem('token', response.data.authToken);

      navigate('/dashboard');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
      }
    }
  };

  return (
    <LoginContext.Provider
      value={{ register, handleSubmit, errors, postLogin }}
    >
      {children}
    </LoginContext.Provider>
  );
};
