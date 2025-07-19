import { createContext } from 'react';
import type { Credential } from 'src/types/login';

interface AuthConxtexValue {
  login(credential: Credential): Promise<void>;
  logout(): void;
  isLoggingIn: boolean;
  isRefreshing: boolean;
}

export const AuthContext = createContext<AuthConxtexValue>({} as AuthConxtexValue);
export const AuthContextProvider = AuthContext.Provider;
