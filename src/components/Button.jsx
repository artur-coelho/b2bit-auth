const Button = ({
  text,
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
    <button className='button' style={elStyle}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
