import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useSocket } from 'src/providers/socket/context';

interface Notification {
  message: string;
}

export function useNotification() {
  const { socket } = useSocket();
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
