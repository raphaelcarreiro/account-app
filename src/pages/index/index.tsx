import { useState } from 'react';
import { styled } from '@mui/material';
import { LoginForm } from './login-form';
import { useLoginValidation } from '@pages/index/validation/use-login-validation';
import { useAuth } from 'src/providers/auth/context';
import { useApp } from 'src/providers/app/context';

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
  width: 300,
  margin: '0 auto',
  marginTop: 100,
});

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation, setValidation, validate] = useLoginValidation();
  const [loading, setLoading] = useState(false);
  const { user } = useApp();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    validate({ email, password }).then(handleLogin);
  }

  function handleLogin() {
    login({ email, password })
      .catch(error =>
        setValidation({
          email: error.message,
          password: error.message,
        }),
      )
      .finally(() => setLoading);
  }

  return (
    <Form onSubmit={handleSubmit}>
      {!user && (
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          validation={validation}
          loading={loading}
        />
      )}
    </Form>
  );
}
