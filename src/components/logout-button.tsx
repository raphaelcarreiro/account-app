import { Button } from '@mui/material';
import React from 'react';
import { useApp } from 'src/providers/app/context';
import { useAuth } from 'src/providers/auth/context';

const LogoutButton: React.FC = () => {
  const { user } = useApp();
  const { logout } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <Button onClick={logout} variant="contained" color="error">
      sair
    </Button>
  );
};

export { LogoutButton };
