import { useState } from 'react';
import { Box } from '@mui/material';
import { LoginForm } from './login-form';
import { useAuth } from 'src/hooks/use-auth';
import { useLoginValidation } from '@pages/index/validation/use-login-validation';
import { useApp } from 'src/hooks/use-app';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validation, validate] = useLoginValidation();
  const { user } = useApp();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    validate({ email, password }).then(() => login({ email, password }));
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300, margin: '0 auto', mt: 10 }}
    >
      {!user && (
        <LoginForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          validation={validation}
        />
      )}
    </Box>
  );
}
