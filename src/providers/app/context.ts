import { createContext, type Dispatch, type SetStateAction } from 'react';
import type { User } from 'src/types/user';

type AppContextValue = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

export const AppContext = createContext<AppContextValue | undefined>(undefined);
export const AppContextProvider = AppContext.Provider;
