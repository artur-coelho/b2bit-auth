const BaseCard = ({ children, maxWidth, minWidth }) => {
  const elStyle = { width: '100%', maxWidth, minWidth };

  return (
    <div style={elStyle} className='base-card'>
      {children}
    </div>
  );
};

export default BaseCard;
