import React from "react";
import { Redirect } from "react-router-dom";
import FakeAuthService from "./FakeAuthService";

const Login = props => {
  const { from } = props.location.state || { from: { pathname: "/" } };
  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }
  return (
    <>
      <p>You must login first to view the protected pages</p>
      <button
        onClick={() =>
          FakeAuthService.authenticate(() => {
            setRedirectToReferrer(true);
          })
        }
      >
        Login
      </button>
    </>
  );
};

export default Login;
