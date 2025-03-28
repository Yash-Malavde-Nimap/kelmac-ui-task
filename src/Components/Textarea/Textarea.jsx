const Textarea = ({
  label,
  labelClassname,
  parentClass,
  className,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className={parentClass}>
      <label className={labelClassname} htmlFor={name}>
        {label}
      </label>
      <textarea
        className={className}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Textarea;
