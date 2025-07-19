import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { useApp } from './use-app';
const socketUrl = import.meta.env.VITE_SOCKET_URL;

const socket = io(`${socketUrl}`, { withCredentials: true });

type UseSocket = [Socket | null, boolean];

export function useSocket(): UseSocket {
  const { user } = useApp();
  const [connected, setConnected] = useState(socket.connected);

  useEffect(() => {
    if (!user) {
      socket.disconnect();
    }

    setConnected(false);
  }, [user]);

  useEffect(() => {
    if (!user) {
      return;
    }

    socket.on('connect', () => {
      setConnected(true);
    });

    return () => {
      socket.disconnect();
    };
  }, [user]);

  return [socket, connected];
}
