import { Button, TextField } from '@mui/material';
import type { LoginValidation } from '@pages/index/validation/use-login-validation';
import React, { type Dispatch, type SetStateAction } from 'react';

interface Props {
  validation: LoginValidation;
  email: string;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  loading?: boolean;
}

const LoginForm: React.FC<Props> = ({ email, setEmail, setPassword, password, validation, loading }) => {
  return (
    <>
      <TextField
        fullWidth
        id="username"
        name="username"
        label="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        error={Boolean(validation.email)}
        helperText={validation.email}
      />

      <TextField
        fullWidth
        id="password"
        name="password"
        label="Senha"
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        error={Boolean(validation.password)}
        helperText={validation.password}
      />

      <Button color="primary" variant="contained" type="submit" disabled={loading}>
        Entrar
      </Button>
    </>
  );
};

export { LoginForm };
