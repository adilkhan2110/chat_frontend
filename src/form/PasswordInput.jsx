import React, { useState } from "react";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { useFormContext } from "react-hook-form";
import validationRules from "./validationRules";

const PasswordInput = ({
  name,
  label,
  isRequired,
  methods,
  confirmPasswordName,
  isLabels,
  placeholder,
  className
}) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const validationConfig = {};

 
  if (isRequired) {
    validationConfig.required = "Password is required";
  }

  validationConfig.pattern = validationRules.password;

  validationConfig.validate = (value) =>
    value === methods.getValues("password") || "Passwords do not match";

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleBlur = async () => {
    await trigger("confirmPassword");
    await trigger(name);
  };

  return (
    <div className={className?`${className} "form-group "`: "form-group"}>
      {isLabels && (
        <label className="form-label fw-medium fs-14" htmlFor={name}>
          {label}
          {isRequired && <span className="text-danger">*</span>}
        </label>)
       }

      <div className="input-group">
        <input
          type={isPasswordVisible ? "text" : "password"}
          id={name}
          placeholder={placeholder}
          className={`form-control${errors[name] ? " is-invalid" : ""}`}
          {...register(name, validationConfig)}
          onBlur={handleBlur}
          onKeyUp={handleBlur}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="btn btn-outline-secondary"
        >
          {isPasswordVisible ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
        </button>
      </div>

      {errors[name] && (
        <div className="invalid-feedback">{errors[name].message}</div>
      )}
    </div>
  );
};

export default PasswordInput;
