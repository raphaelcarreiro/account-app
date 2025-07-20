import { createContext, useContext } from 'react';
import type { Socket } from 'socket.io-client';

export interface SocketContextValue {
  socket: Socket | null;
  connect: () => void;
  disconnect: () => void;
  connected: boolean;
}

const SocketContext = createContext<SocketContextValue | undefined>(undefined);
const SocketContextProvider = SocketContext.Provider;

function useSocket(): SocketContextValue {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }

  return context;
}

export { SocketContext, SocketContextProvider, useSocket };
