import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import vpassLogo from "../../assets/vpass-logo.png";
import { useTheme } from "@mui/material";

function Login() {
  const [isLoading] = useState(false);
  const theme = useTheme();

  const handleLoginSubmit = async (values) => {};

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Formik
        initialValues={loginValues}
        validationSchema={loginValuesValidation}
        onSubmit={handleLoginSubmit}
      >
        <Form>
          <fieldset className="d-flex flex-column p-4 m-3 border border-1 rounded-5">
            <legend className="fs-3 fw-bold mb-4 text-center">
              <img
                className="img-fluid w-25 border rounded-5 mb-5"
                src={vpassLogo}
                alt="VPASS logo"
              />
              <div className="fs-4 fw-normal">Sign-in to your Employah Account</div>
            </legend>
            <div className="form-floating mb-3">
              <Field
                name="email"
                type="email"
                id="email"
                className="form-control fs-3 border border-1"
                placeholder="name@example.com"
              />
              <label
                htmlFor="email"
                style={{
                  color: theme.palette.primary[500],
                }}
              >
                Email
              </label>
              <ErrorMessage
                component="div"
                className="text-danger"
                name="email"
              />
            </div>

            <div className="form-floating my-3">
              <Field
                name="password"
                type="password"
                id="password"
                className="form-control fs-3 border border-1"
                placeholder="Uppercase-lowercase-number"
              />
              <label
                htmlFor="password"
                style={{
                  color: theme.palette.primary[500],
                }}
              >
                Password
              </label>
              <ErrorMessage
                component="div"
                className="text-danger"
                name="password"
              />
            </div>

            <div className="d-grid mt-3">
              <button type="submit" className="btn btn-primary fs-4">
                {isLoading ? (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </fieldset>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;

const loginValues = { email: "", password: "" };

const loginValuesValidation = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email required"),
  password: Yup.string().required("Password is required"),
});