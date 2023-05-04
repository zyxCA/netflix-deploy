import Input from "@/components/Input"
import { useCallback, useState } from "react"
const Auth = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [variant, setVariant] = useState("login")
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    )
  }, [])
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
              className="bg-red-600 text-white rounded-md w-full mt-10 py-3
            hover:bg-red-700 transition
            ">
              {variant === "login" ? "Login" : "Sign Up"}
            </button>
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
  )
}

export default Auth
