import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

export interface ILoginProviderProps {
  children: React.ReactNode;
}

export interface ILoginProvider {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  errors: FieldErrors<FieldValues>;
  postLogin: (data: TLoginForm) => Promise<void>;
}

export interface TLoginForm {
  email: string;
  password: string;
}
