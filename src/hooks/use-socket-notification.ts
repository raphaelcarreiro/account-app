import { useEffect } from 'react';
import { useSocket } from './use-socket';
import { useSnackbar } from 'notistack';

interface Notification {
  message: string;
}

export function useNotification() {
  const [socket] = useSocket();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on('notification.created', (notification: Notification) => {
      enqueueSnackbar(notification.message, { variant: 'success' });
    });
  }, [socket, enqueueSnackbar]);
}
