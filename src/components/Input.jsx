const Input = ({
  inputId,
  type,
  label,
  textValidation,
  placeholder = 'Type here...',
  isValid = true,
  disabled = false,
  onChange,
  value,
}) => {
  return (
    <div className='input'>
      <label htmlFor={inputId}>{label}</label>
      <input
        type={type}
        id={inputId}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        maxLength='100'
        value={value}
      ></input>
      {!isValid ? <span>{textValidation}</span> : ''}
    </div>
  );
};

export default Input;
