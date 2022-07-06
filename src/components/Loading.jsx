const Loading = ({
  size = '64px',
  borderSize = '12px',
  text = 'Carregando...',
  withText = true,
  borderColor = '#02274F',
  backgroundBorderColor = '#f3f3f3',
}) => {
  const elStyle = {
    width: size,
    height: size,
    border: `${borderSize} solid ${backgroundBorderColor}`,
    borderTop: `${borderSize} solid ${borderColor}`,
  };

  return (
    <div className='loading-box'>
      <div style={elStyle} className='loading'></div>
      {withText ? <span>{text}</span> : ''}
    </div>
  );
};

export default Loading;
