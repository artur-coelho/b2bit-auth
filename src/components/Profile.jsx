import { useState, useEffect } from 'react';
import { UserService } from '../services';

import BaseCard from './BaseCard';
import Input from './Input';
import Loading from './Loading';

const Profile = () => {
  const [userImage, setUserImage] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    UserService.getUserProfile()
      .then(({ avatar, name, last_name, email }) => {
        setUserImage(avatar.image_low_url);
        setUserName(`${name} ${last_name}`);
        setUserEmail(email);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <BaseCard maxWidth='356px'>
      {!loading ? (
        <div>
          <div className='profile'>
            <h3 className='profile-title'>Profile Picture</h3>
            <img
              className='avatar-image'
              title='user profile picture'
              alt='profile'
              src={userImage}
            ></img>
          </div>
          <Input disabled value={userName} label='Your Name'></Input>
          <Input disabled value={userEmail} label='Your Email'></Input>
        </div>
      ) : (
        <Loading />
      )}
    </BaseCard>
  );
};

export default Profile;
