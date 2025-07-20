import './App.css';
import Index from '@pages/index';
import { LogoutButton } from '@pages/logout-button';
import { useNotification } from './hooks/use-socket-notification';
import SplashScreen from '@components/splash-screen';

function App() {
  useNotification();

  return (
    <>
      <SplashScreen />
      <Index />
      <LogoutButton />
    </>
  );
}

export default App;
