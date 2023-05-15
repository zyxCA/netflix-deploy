import Input from "@/components/Input";
import { useCallback, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-full w-full bg-no-repeat bg-center bg-fixed bg-cover bg-[url('/images/hero.jpg')]">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white font-semibold text-4xl mb-8">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  id="name"
                  onChange={(ev: any) => setName(ev.target.value)}
                  value={name}
                />
              )}
              <Input
                label="Email"
                id="email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                type="email"
                value={email}
              />
              <Input
                label="Password"
                id="password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                type="password"
                value={password}
              />
            </div>
            <button
              onClick={variant === "login" ? login : register}
              className="bg-red-600 text-white rounded-md w-full mt-10 py-3
            hover:bg-red-700 transition
            ">
              {variant === "login" ? "Login" : "Sign Up"}
            </button>
            <div className="flex flex-row items-center gap-4 justify-center ">
              <div
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition ">
                <FcGoogle size={30} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                className="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition ">
                <FaGithub size={30} />
              </div>
            </div>
            {variant === "login" ? (
              <p className=" text-neutral-500 mt-12 text-center text-xl">
                First time using Netflix?{" "}
                <span
                  onClick={toggleVariant}
                  className="text-white ml-1 hover:underline cursor-pointer line-clamp-1">
                  Create an account
                </span>
              </p>
            ) : (
              <p className=" text-neutral-500 mt-12 text-xl text-center">
                Already have an account?
                <span
                  className="ml-2 hover:underline text-white cursor-pointer line-clamp-1"
                  onClick={toggleVariant}>
                  Sign in
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
