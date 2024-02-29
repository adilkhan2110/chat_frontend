import React, { useState } from "react";
import { useController } from "react-hook-form";
import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const DatePickerInput = ({ name, label, control, ...rest }) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const [defaultDate, setDefaultDate] = useState(new Date());

  return (
    <div className="form-group">
      {label && (
        <div className="form-label fw-medium fs-14">
          <label>{label}</label>{" "}
        </div>
      )}

      <DatePicker
        className={`datepiker ${error ? " is-invalid" : ""}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
      {error && <div className="invalid-feedback">{error.message}</div>}
    </div>
  );
};

export default DatePickerInput;
