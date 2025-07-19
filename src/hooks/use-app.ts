import { useContext } from 'react';
import { AppContext } from 'src/providers/app/context';

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }

  return context;
}
