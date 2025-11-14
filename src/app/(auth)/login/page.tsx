import AuthLayout from "@/features/auth/components/auth-layout";
import { LoginForm } from "@/features/auth/components/login-form";
import React from "react";

const Page = async () => {
  // await requireUnAuth();
  return <LoginForm />;
};

export default Page;
