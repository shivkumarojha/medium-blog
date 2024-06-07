import { Quote } from "../components/Quote"
import { SignUpComponent } from "../components/SignUpComponent"

function Signup() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <SignUpComponent />
      <Quote />
    </div>
  )
}

export default Signup
