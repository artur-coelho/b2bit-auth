const Input = ({ label, type, inputId, isValid = true, textValidation }) => {
  return (
    <div className='input'>
      <label for={inputId}>{label}</label>
      <input type={type} id={inputId}></input>
      {!isValid ? <span>{textValidation}</span> : ''}
    </div>
  );
};

export default Input;
