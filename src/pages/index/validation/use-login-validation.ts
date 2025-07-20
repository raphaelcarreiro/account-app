import { useState } from 'react';
import type { Credential } from '@pages/index/types/credential';
import * as yup from 'yup';

export interface LoginValidation {
  email?: string;
  password?: string;
}

type UseLoginValidation = [LoginValidation, (credential: Credential) => Promise<void>];

export function useLoginValidation(): UseLoginValidation {
  const [validation, setValidation] = useState<LoginValidation>({} as LoginValidation);

  async function handleValidation(credential: Credential) {
    const schema = yup.object().shape({
      email: yup.string().required('o nome de usuário é obrigatório').email('Email inválido'),
      password: yup.string().required('a senha é obrigatória'),
    });

    try {
      await schema.validate(credential, { abortEarly: false });
      setValidation({});
    } catch (err) {
      const error = err as yup.ValidationError;

      const _validation: LoginValidation = {};

      error.inner.forEach(e => {
        if (e.path) {
          _validation[e.path as keyof LoginValidation] = e.message;
        }
      });

      setValidation(_validation);
      throw err;
    }
  }

  return [validation, handleValidation];
}
