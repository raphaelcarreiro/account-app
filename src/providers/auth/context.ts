import { createContext, useContext } from 'react';
import type { Credential } from 'src/types/login';

interface AuthConxtexValue {
  login(credential: Credential): Promise<void>;
  logout(): void;
  isLoggingIn: boolean;
  isRefreshing: boolean;
}

const AuthContext = createContext<AuthConxtexValue>({} as AuthConxtexValue);
const AuthContextProvider = AuthContext.Provider;

function useAuth() {
  return useContext(AuthContext);
}

export { AuthContext, AuthContextProvider, useAuth };
