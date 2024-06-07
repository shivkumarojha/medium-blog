import { Navbar } from "../components/NavBar"
import { Quote } from "../components/Quote"

function HomePage() {
  return (
    <div className="h-screen">
      <Navbar />

      <Quote />
    </div>
  )
}

export default HomePage
