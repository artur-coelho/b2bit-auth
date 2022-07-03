import Button from './Button';
import BaseCard from './BaseCard';
import Input from './Input';

const Login = () => {
  return (
    <BaseCard>
      <Input label='Senha' type='password' />
      <Button bgColor='#02274F' text='Teste' />
    </BaseCard>
  );
};

export default Login;
