import { useState, useEffect, React } from 'react';
import Input from './Input';
import Button from './Button';

const EMAIL_REGEX = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i;

const LoginForm = () => {
  const [emailValid, setEmailValid] = useState(true);
  const [email, setEmail] = useState('');

  const handleChangeEmail = (value) => {
    setEmailValid(!value ? true : EMAIL_REGEX.test(value));
    setEmail(value);
  };

  return (
    <form>
      <Input
        inputId='login-input-email'
        type='email'
        label='E-mail'
        textValidation='Invalid E-mail!'
        isValid={emailValid}
        onChange={handleChangeEmail}
      />
      <Input inputId='login-input-password' type='password' label='Password' />
      <Button text='Sign In' />
    </form>
  );
};

export default LoginForm;
