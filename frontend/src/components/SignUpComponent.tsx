import { Link } from "react-router-dom"
import { InputBox } from "./InputBox"
import { useState } from "react"
import { Button } from "./Button"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { toast, ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"
export const SignUpComponent = () => {
  const navigate = useNavigate()

  const [signUpData, setSignUpData] = useState({
    email: "",
    name: "",
    password: "",
  })

  return (
    <div className="flex flex-col space-y-3 justify-center text-center ">
      <div className="text-3xl font-semibold font-mono text-slate-900">
        Create an Account
      </div>
      <div className="font-light font-serif ">
        Already have an account?
        <Link
          className="text-red-500  px-2 font-semibold underline"
          to="/signin"
        >
          Sign In
        </Link>
      </div>
      <div className="flex flex-col text-start items-center w-full">
        {/* Email input */}
        <InputBox
          id="email"
          label="Email"
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            setSignUpData({ ...signUpData, email: e.target.value })
          }}
        />

        {/* Name Input */}
        <InputBox
          id="name"
          label="Name"
          type="text"
          placeholder="John doe"
          onChange={(e) => {
            setSignUpData({
              ...signUpData,
              name: e.target.value,
            })
          }}
        />

        {/* Password Input */}
        <InputBox
          id="password"
          label="Password"
          type="password"
          placeholder="*********"
          onChange={(e) => {
            setSignUpData({
              ...signUpData,
              password: e.target.value,
            })
          }}
        />
        <Button
          label="Sign Up"
          onClick={async () => {
            const response = await axios.post(
              `${BACKEND_URL}/api/v1/user/signup`,
              {
                email: signUpData.email,
                name: signUpData.name,
                password: signUpData.password,
              }
            )
            if (response.data.message) {
              toast(response.data.message)
            }
            console.log(response.data)
            if (response.data.user) {
              navigate("/signin")
            }
          }}
        />
        <ToastContainer />
      </div>
    </div>
  )
}
