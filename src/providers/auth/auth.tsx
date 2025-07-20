import { useCallback, useEffect, useState, type FC, type PropsWithChildren } from 'react';
import { AuthContextProvider } from './context';
import { api } from 'src/services/api';
import type { Credential } from '@pages/index/types/credential';
import { useApp } from '../app/context';
import { useSocket } from '../socket/context';

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isRefreshing, setIsRefreshing] = useState(true);
  const { setUser } = useApp();
  const { disconnect } = useSocket();

  useEffect(() => {
    setIsRefreshing(true);

    api
      .post('refresh-token')
      .then(response => {
        setUser(response.data);
      })
      .finally(() => {
        setIsRefreshing(false);
      });
  }, [setUser]);

  const login = useCallback(
    async (credential: Credential) => {
      const response = await api.post('/login', credential);
      setUser(response.data);
    },
    [setUser],
  );

  const logout = useCallback(async () => {
    await api.post('/logout');
    setUser(null);
    disconnect();
  }, [setUser, disconnect]);

  return <AuthContextProvider value={{ login, logout, isRefreshing }}>{children}</AuthContextProvider>;
};

export default AuthProvider;
