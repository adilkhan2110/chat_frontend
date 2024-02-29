import React, { useState } from "react"; // Import useState
import TextInput from "../../form/TextInput";
import { FormProvider, useForm } from "react-hook-form";
import PasswordInput from "../../form/PasswordInput";

const Login = (props) => {
  
  const { userValue, setUserValue } = props;

  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setUserValue(data.title);
    methods.reset(); // Reset the form values
  };

  return (
    <>
      <div className="main login-body">
        <div className="login">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="logo-img">
                <img src="./assets/images/chat-logo.png" alt="" />
              </div>
              <TextInput
                name="title"
                label="Title"
                type="required"
                className="form-control"
                placeholder="User Name"
              />

              <PasswordInput
                name="password"
                label="Password"
                placeholder="Password"
                isRequired={true}
                methods={methods}
              />
              <div>
                <button type="submit" className="btn primary-btn">
                  Login
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};

export default Login;
