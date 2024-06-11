import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { useParams } from "react-router-dom"
import { BlogCard } from "../components/BlogCard"
import { Navbar } from "../components/NavBar"
import { AuthorType, BlogType } from "./Blog"
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
  const [author, setAuthor] = useState<AuthorType>({
    email: "",
    name: "",
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
        setAuthor({
          id: response.data.blog.authorId,
          email: response.data.blog.author.email,
          name: response.data.blog.author.name,
        })

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
        <BlogCard blog={blog} author={author}></BlogCard>
      </div>
    </div>
  )
}
