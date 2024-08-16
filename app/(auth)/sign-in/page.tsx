import React from "react";
import AuthForm from "@/components/layout/AuthForm";

const SignIn = () => {
  return (
    <section className="flex justify-center items-center w-auto h-screen max-sm:px-6 border-4 bg-myColors-secondary">
      <AuthForm type="sign-in" />
    </section>
  );
};

export default SignIn;
