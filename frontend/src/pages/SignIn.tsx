import { Quote } from "../components/Quote"
import { SignInComponent } from "../components/SignInComponent"

function SignIn() {
  return (
    <div className="grid grid-col-2">
      <SignInComponent />
      <Quote />
    </div>
  )
}

export default SignIn
