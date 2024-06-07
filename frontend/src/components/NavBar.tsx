import { Link } from "react-router-dom"
import { Button } from "./Button"

export const Navbar = () => {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 flex justify-between bg-slate-600">
        <div className="text-2xl font-semibold font-mono p-2 text-slate-100">
          Blog Like Pro
        </div>
        <div className="pb-2">
          <Link className="pr-2" to={"/signin"}>
            <Button label="Sign In" onClick={() => {}} />
          </Link>
          <Link className="mb-2" to={"/signup"}>
            <Button label="Sign Up" onClick={() => {}} />
          </Link>
        </div>
      </div>
    </div>
  )
}
