import axios from "axios"
import { Button } from "./Button"
import { InputBox } from "./InputBox"
import { BACKEND_URL } from "../config"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom"
export const SignInComponent = () => {
  const navigate = useNavigate()
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  })

  return (
    <div className="text-center flex flex-col justify-center h-screen">
      <div className="text-2xl font-semibold font-mono mb-2">
        Sign Into Your Account
      </div>
      <div className="text-slate-700 font-mono">
        Not have an account?
        <Link className="font-semibold underline text-blue-900" to="/signup">
          Sign up
        </Link>
      </div>
      <form className="flex flex-col text-start px-10 justify-center w-auto">
        <InputBox
          id="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          type="email"
          onChange={(e) => {
            setSignInData({ ...signInData, email: e.target.value })
          }}
        />
        <InputBox
          id="password"
          label="Password"
          placeholder="**********"
          type="password"
          onChange={(e) => {
            setSignInData({ ...signInData, password: e.target.value })
          }}
        />
        <Button
          label="Sign In"
          onClick={async (e) => {
            e.preventDefault()
            const response = await axios.post(
              `${BACKEND_URL}/api/v1/user/signin`,
              {
                email: signInData.email,
                password: signInData.password,
              }
            )
            console.log(response.data.message)
            if (!response.data.token) {
              toast(response.data.message)
            }
            if (response.data.token) {
              localStorage.setItem("token", response.data.token)
              toast(response.data.message)
              navigate("/blog")
            }
          }}
        />
      </form>
    </div>
  )
}
