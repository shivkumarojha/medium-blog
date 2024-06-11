import { Quote } from "../components/Quote"
import { SignInComponent } from "../components/SignInComponent"

function SignIn() {
  return (
    <div className="grid  grid-cols-2">
      <div>
        <SignInComponent />
      </div>
      <div>
        <Quote />
      </div>
    </div>
  )
}

export default SignIn
