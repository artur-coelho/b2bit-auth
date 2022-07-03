const BaseCard = ({ children, maxWidth, minWidth }) => {
  const elStyle = { maxWidth, minWidth };

  return (
    <div style={elStyle} className='base-card'>
      {children}
    </div>
  );
};

export default BaseCard;
