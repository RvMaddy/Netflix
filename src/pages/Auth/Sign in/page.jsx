import "./signIn.css";

import React from "react";
import Form from "../../../../../components/form/Form";
import Footer from "../../../../src/Components/footer/Footer";

const SignIn = () => {
  return (
    <div className="auth-page">
      <Form isSignin />
      <Footer />
    </div>
  );
};

export default SignIn;
