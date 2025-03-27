const Input = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  parentClass,
  className
}) => {
  return (
    <div className={parentClass}>
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input
        className={className}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
