const Button = ({ text, bgColor, textColor }) => {
  const elStyle = {
    backgroundColor: bgColor || '#02274F',
    color: textColor || ' #fff',
  };

  return <button style={elStyle}>{text}</button>;
};

export default Button;
