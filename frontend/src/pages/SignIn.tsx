import { Quote } from "../components/Quote"
import { SignInComponent } from "../components/SignInComponent"

function SignIn({ isAuthenticated, setIsAuthenticated }) {
  return (
    <div className="grid  grid-cols-2">
      <div>
        <SignInComponent
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      </div>
      <div>
        <Quote />
      </div>
    </div>
  )
}

export default SignIn
