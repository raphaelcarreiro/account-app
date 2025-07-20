import { useState } from 'react';
import type { ReactNode } from 'react';
import type { User } from '@pages/index/types/user';
import { AppContextProvider } from './context';

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  return <AppContextProvider value={{ user, setUser }}>{children}</AppContextProvider>;
}
