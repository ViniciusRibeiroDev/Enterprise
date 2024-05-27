import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  password: yup
    .string()
    .min(8, 'Senha deve conter pelo menos 8 caracteres')
    .required('Senha obrigatória'),
});
