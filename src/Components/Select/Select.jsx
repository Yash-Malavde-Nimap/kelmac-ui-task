const Select = ({
  label,
  parentClass,
  className,
  name,
  value,
  onChange,
  optionLabel,
  options,
}) => {
  return (
    <div className={parentClass}>
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <select
        className={className}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>
          {optionLabel}
        </option>
        {options.length > 0 ? (
          options.map((item, id) => (
            <option key={id} value={item.value}>
              {item.name}
            </option>
          ))
        ) : (
          <>No Data Found</>
        )}
      </select>
    </div>
  );
};

export default Select;
