import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
const socketUrl = import.meta.env.VITE_SOCKET_URL;

type UseSocket = [Socket | null, boolean];

export function useSocket(): UseSocket {
  const socketRef = useRef<Socket | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socketRef.current = io(socketUrl, {
      transports: ['websocket'],
    });

    socketRef.current.on('connect', () => {
      setConnected(true);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  return [socketRef.current, connected];
}
