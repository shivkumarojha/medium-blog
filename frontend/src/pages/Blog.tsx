import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import { Navbar } from "../components/NavBar"
import { BlogCard } from "../components/BlogCard"
import { Spinner } from "../components/Spinner"
import { useNavigate } from "react-router-dom"

export interface BlogType {
  id?: string
  author: { name: string }
  title: string
  content: string
}

export interface AuthorType {
  id: string
  name: string
  email: string
}
function Blog() {
  const navigate = useNavigate()
  const [author, setAuthor] = useState<AuthorType>({
    email: "",
    name: "",
    id: "",
  })
  const [blogs, setBlogs] = useState<BlogType[]>([
    {
      author: { name: "" },
      title: "",
      content: "",
    },
  ])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/signin")
    } else {
      axios
        .get(`${BACKEND_URL}/api/v1/blog/post/bulk`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          setBlogs(response.data.data.post)
          setAuthor({
            id: response.data.data.id,
            email: response.data.data.email,
            name: response.data.data.name,
          })
          setLoading(false)
        })
    }
  }, [])
  if (loading) {
    return <Spinner />
  }

  if (blogs.length === 0) {
    return (
      <>
        <Navbar isAuthenticated={true} />
        <div className="flex flex-col h-screen justify-center items-center font-semibold text-slate-800 text-3xl">
          You have not any Blogs!!!
        </div>
      </>
    )
  }
  return (
    <div>
      <Navbar isAuthenticated={true} />
      <div className="p-3 grid grid-cols-2  w-full justify-center">
        {blogs.map((blog) => {
          return <BlogCard blog={blog} author={author} />
        })}
      </div>
    </div>
  )
}
export default Blog
