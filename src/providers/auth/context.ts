import { createContext, useContext } from 'react';
import type { Credential } from '@pages/index/types/credential';

interface AuthConxtexValue {
  login(credential: Credential): Promise<void>;
  logout(): void;
  isRefreshing: boolean;
}

const AuthContext = createContext<AuthConxtexValue>({} as AuthConxtexValue);
const AuthContextProvider = AuthContext.Provider;

function useAuth() {
  return useContext(AuthContext);
}

export { AuthContext, AuthContextProvider, useAuth };
