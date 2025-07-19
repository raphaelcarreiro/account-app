import { useContext } from 'react';
import { AuthContext } from 'src/providers/auth/context';

export function useAuth() {
  return useContext(AuthContext);
}
