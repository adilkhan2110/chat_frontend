import React from "react";
import { useFormContext } from "react-hook-form";

const ConfirmPasswordInput = ({ name, label, isRequired, methods }) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const validationConfig = {};

  if (isRequired) {
    validationConfig.required = "Confirm password is required";
  }

  validationConfig.validate = (value) =>
    value === methods.getValues("password") || "Passwords do not match";

  const handleBlur = async () => {
    await trigger("password");
    await trigger(name);
  };

  return (
    <div className="form-group">
      <label className="form-label fw-medium fs-14" htmlFor={name}>
        {label}
        {isRequired && <span className="text-danger">*</span>}
      </label>

      <input
        type="password"
        id={name}
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

export default ConfirmPasswordInput;
