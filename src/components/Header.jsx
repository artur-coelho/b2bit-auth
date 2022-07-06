import Button from './Button';
import { AuthService } from '../services';

const Header = () => {
  return (
    <header className='header'>
      <Button text='Logout' width='272px' onClick={AuthService.logout} />
    </header>
  );
};

export default Header;
