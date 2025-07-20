import { createContext, useContext, type Dispatch, type SetStateAction } from 'react';
import type { User } from 'src/types/user';

type AppContextValue = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);
const AppContextProvider = AppContext.Provider;

function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }

  return context;
}

export { AppContext, AppContextProvider, useApp };
