import { useEffect } from "react"
import { Navbar } from "../components/NavBar"
import { Quote } from "../components/Quote"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"

function HomePage() {
  const navigate = useNavigate()
  // Check if the user is logged in
  useEffect(() => {
    // check if the user is authenticated
    const token = localStorage.getItem("token")
    console.log(token)
    if (!token) {
      navigate("/")
    }
    axios
      .post(
        `${BACKEND_URL}/api/v1/user/me`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data)
        if (!response.data.userId) {
          navigate("/")
        } else {
          localStorage.setItem("userId", response.data.userId)
          navigate("/blog")
        }
      })
      .catch((error) => {
        console.log("Error while fetching data", error)
      })
  }, [])
  return (
    <div className="h-screen">
      <Navbar />
      <Quote />
    </div>
  )
}

export default HomePage
