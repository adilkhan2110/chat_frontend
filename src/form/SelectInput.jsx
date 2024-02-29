import React from 'react';
import Select from 'react-select';
import { useController } from 'react-hook-form';

const SelectInput = ({ name, label, options, register, control, ...rest }) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div>
      
      {label && <label>{label}</label>}

      <Select
 
        className={`form-control p-0 ${error ? 'is-invalid' : ''}`}
        name={name}
        options={options}
        value={options.find((option) => option.value === value)}
        onChange={(selectedOption) => onChange(selectedOption.value)}
        onBlur={onBlur}
        {...rest}
      />
      {error && <div className="invalid-feedback">{error.message}</div>}
    </div>
  );
};

export default SelectInput;
