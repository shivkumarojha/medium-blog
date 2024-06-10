import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import { Navbar } from "../components/NavBar"
import { BlogCard } from "../components/BlogCard"
import { Spinner } from "../components/Spinner"

export interface BlogType {
  id?: string
  author: { name: string }
  title: string
  content: string
}
function Blog() {
  const [blogs, setBlogs] = useState<BlogType[]>([
    {
      author: { name: "" },
      title: "",
      content: "",
    },
  ])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const response = axios.get(`${BACKEND_URL}/api/v1/blog/post/bulk`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    response.then((response) => {
      setBlogs(response.data.blogs)
      setLoading(false)
    })
  }, [])
  console.log(blogs)
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <Navbar isAuthenticated={true} />
      <div className="pt-20">
        {blogs.map((blog) => {
          return <BlogCard blog={blog} />
        })}
      </div>
    </div>
  )
}

export default Blog
