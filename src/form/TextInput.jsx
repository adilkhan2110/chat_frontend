import React from "react";
import { useFormContext } from "react-hook-form";
import validationRules from "./validationRules";

const TextInput = ({ name, label, type, isRequired, isLabel,placeholder }) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const validationConfig = {};

  if (type === "email") {
    validationConfig.required = "This field is required";
    validationConfig.pattern = validationRules.email;
  }

  if (type === "required") {
    validationConfig.required = "This field is required";
  }

  if (type === "number") {
    if (isRequired) {
      validationConfig.required = "This field is required";
    }
    validationConfig.pattern = validationRules.number;
  }

  if (type === "phone") {
    if (isRequired) {
      validationConfig.required = "This field is required";
    }
    validationConfig.pattern = validationRules.phone;
  }

  const handleBlur = async () => {
    await trigger(name);
  };

  return (
    <div className="form-group">
      {isLabel &&
          <label className="form-label fw-medium fs-14" htmlFor={name}>
          {label}
          {(type === "required" || isRequired) && (
            <span className="text-danger">*</span>
          )}
        </label>
      }
      

      <input
        type="text"
        id={name}
        placeholder={placeholder}
        className={`form-control${errors[name] ? " is-invalid" : ""}`}
        {...register(name, validationConfig)}
        onBlur={handleBlur}
        onKeyUp={handleBlur}
      />

      {errors[name] && (
        <div className="invalid-feedback">{errors[name].message}</div>
      )}
    </div>
  );
};

export default TextInput;
