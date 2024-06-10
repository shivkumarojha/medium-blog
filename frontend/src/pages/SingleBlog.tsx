import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useParams } from "react-router-dom"
import { BlogCard } from "../components/BlogCard"
import { Navbar } from "../components/NavBar"
import { BlogType } from "./Blog"
import { Spinner } from "../components/Spinner"

export const SingleBlog = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [blog, setBlog] = useState<BlogType>({
    author: { name: "" },
    content: "",
    title: "",
    id: "",
  })
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data)
        setBlog(response.data.blog)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      <Navbar isAuthenticated={true} />
      <div className="pt-20">
        <BlogCard blog={blog}></BlogCard>
      </div>
    </div>
  )
}
