import { Link, useNavigate } from "react-router-dom"
import { Button } from "./Button"

export const Navbar = ({
  isAuthenticated = false,
}: {
  isAuthenticated?: boolean
}) => {
  const navigate = useNavigate()
  return (
    <div className="relative mb-20">
      <div className="fixed top-0 left-0 right-0 flex justify-between bg-slate-600">
        <div className="text-2xl font-semibold font-mono p-2 text-slate-100">
          Blog Like Pro
        </div>
        {isAuthenticated ? (
          <div>
            <div className=" flex justify-center p-2">
              <Button
                label={"Create New Blog"}
                onClick={() => {
                  navigate("/createBlog")
                }}
              />
              <div className="px-2">
                <Button
                  color="bg-red-600"
                  label="Logout"
                  onClick={() => {
                    localStorage.removeItem("token")
                    localStorage.removeItem("userId")
                    navigate("/signin")
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="pb-2">
            <Link className="pr-2" to={"/signin"}>
              <Button label="Sign In" onClick={() => {}} />
            </Link>
            <Link className="mb-2" to={"/signup"}>
              <Button label="Sign Up" onClick={() => {}} />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
