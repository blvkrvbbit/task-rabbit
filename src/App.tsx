import { Outlet } from 'react-router-dom';
import AppBar from './components/app-bar/app-bar.component';

const App = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default App;
