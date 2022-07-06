import Loading from './Loading';

const Button = ({
  text,
  type = 'button',
  disabled = false,
  width = '100%',
  bgColor = '#02274F',
  textColor = '#fff',
  onClick,
  loading = false,
}) => {
  const elStyle = {
    width,
    backgroundColor: bgColor,
    color: textColor,
  };

  return !loading ? (
    <button
      type={type}
      disabled={disabled}
      style={elStyle}
      className={`button ${disabled ? 'button-disabled' : ''}`}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  ) : (
    <button style={elStyle} disabled={true} className='button button-disabled'>
      <Loading size='16px' borderSize='4px' withText={false} />
    </button>
  );
};

export default Button;
