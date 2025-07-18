import type { Socket } from 'socket.io-client';
import { useEffect } from 'react';

export function useSocketNotification(socket: Socket) {
  useEffect(() => {
    socket.on('notification.created', notification => {
      console.log('New notification received:', notification);
    });
  }, [socket]);
}
