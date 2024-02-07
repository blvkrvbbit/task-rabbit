import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <header className='border-b'>
      <nav className='app-bar'>
        <div className='navbar-brand'>
          <Link to='/'>Task Rabbit</Link>
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
