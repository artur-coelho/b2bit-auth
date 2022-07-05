import { useState, useEffect, React } from 'react';
import { AuthService } from '../services';
import Input from './Input';
import Button from './Button';

const EMAIL_REGEX = /(.+)@(.+){2,}\.(.+){2,}/;

const LoginForm = () => {
  const [emailValid, setEmailValid] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const handleChangeEmail = (value) => {
    setInvalidCredentials(false);
    setEmailValid(!value ? true : EMAIL_REGEX.test(value));
    setEmail(value);
  };

  const handleChangePassword = (value) => {
    setInvalidCredentials(false);
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await AuthService.signIn({
      email,
      password,
    }).catch(() => setInvalidCredentials(true));
  };

  useEffect(() => {
    setDisabledBtn(!email || !password || !emailValid);
  }, [email, password, emailValid]);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        inputId='login-input-email'
        type='email'
        label='E-mail'
        textValidation='Invalid E-mail!'
        isValid={emailValid}
        onChange={handleChangeEmail}
      />
      <Input
        inputId='login-input-password'
        type='password'
        label='Password'
        onChange={handleChangePassword}
      />
      {invalidCredentials ? (
        <div className='login-error'>
          <span>Invalid Credentials</span>
        </div>
      ) : (
        ''
      )}
      <Button type='submit' text='Sign In' disabled={disabledBtn} />
    </form>
  );
};

export default LoginForm;
