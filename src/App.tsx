import { useState } from 'react';
import './App.css';
import { AppBar } from '@components/appbar';

function App() {
  const [notifications, setNotifications] = useState<string[]>([]);

  return (
    <>
      <AppBar />
    </>
  );
}

export default App;
