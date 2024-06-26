import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page - STech Woozy",
  description: "This is Sign Up page for Tech Woozy",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
