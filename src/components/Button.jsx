const Button = ({
  text,
  disabled = false,
  width = '100%',
  bgColor = '#02274F',
  textColor = '#fff',
}) => {
  const elStyle = {
    width,
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <button
      disabled={disabled}
      style={elStyle}
      className={`button ${disabled ? 'button-disabled' : ''}`}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
