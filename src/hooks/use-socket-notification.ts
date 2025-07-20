import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useSocket } from 'src/providers/socket/context';
import { SOCKET_EVENTS } from 'src/providers/socket/socket-events';

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

    socket.on(SOCKET_EVENTS.NOTIFICATION_CREATED, (notification: Notification) => {
      enqueueSnackbar(notification.message, { variant: 'success' });
    });
  }, [socket, enqueueSnackbar]);
}
