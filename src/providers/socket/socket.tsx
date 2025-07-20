import { useCallback, useEffect, useRef, useState, type FC, type PropsWithChildren } from 'react';
import { SocketContextProvider } from './context';
import { io, type Socket } from 'socket.io-client';
import { useApp } from '../app/context';

const socketUrl = import.meta.env.VITE_SOCKET_URL;

const SocketProvider: FC<PropsWithChildren> = ({ children }) => {
  const { user } = useApp();
  const [connected, setConnected] = useState(false);
  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    if (!socket.current) {
      return;
    }

    socket.current.on('connect', () => {
      setConnected(true);
    });

    socket.current.on('disconnect', () => {
      setConnected(false);
    });
  }, [socket]);

  useEffect(() => {
    if (!user) {
      return;
    }

    if (socket.current?.disconnected) {
      socket.current.connect();
      return;
    }

    socket.current = io(socketUrl, {
      withCredentials: true,
      transports: ['websocket'],
    });

    return () => {
      socket.current?.disconnect();
    };
  }, [user]);

  const connect = useCallback(() => {
    socket.current?.connect();
  }, []);

  const disconnect = useCallback(() => {
    socket.current?.disconnect();
  }, []);

  return (
    <SocketContextProvider value={{ socket: socket.current, connect, disconnect, connected }}>
      {children}
    </SocketContextProvider>
  );
};

export default SocketProvider;
