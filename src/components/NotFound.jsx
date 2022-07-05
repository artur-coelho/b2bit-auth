import { useNavigate } from 'react-router-dom';
import BaseCard from './BaseCard';
import Button from './Button';

import LOGOIMG from '../assets/images/logo.svg';

const NotFound = () => {
  const navigate = useNavigate();

  const goToHome = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <BaseCard>
      <section className='nf-container'>
        <img className='logo-img' alt='b2bit logo' src={LOGOIMG}></img>
        <h1 className='nf-title'>404 - Page Not Found</h1>
        <p className='nf-text'>
          You're probably trying to access a page that doesn't exist
        </p>
        <Button text='Go to Home' onClick={goToHome} />
      </section>
    </BaseCard>
  );
};

export default NotFound;
