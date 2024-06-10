import { BlogType } from "../pages/Blog"
import { useNavigate } from "react-router-dom"

export const BlogCard = ({ blog }: { blog: BlogType }) => {
  const navigate = useNavigate()
  return (
    <div
      className="flex flex-col text-center border-b-4"
      key={blog.id}
      onClick={() => {
        const id = blog.id
        navigate(`/blog/${id}`)
      }}
    >
      <div className="">
        <div className="font-mono font-semibold pb-1">
          {blog.author.name || "Anonymous"}
        </div>
        <div className="text-xl">{blog.title}</div>
        <div className="pb-4">{blog.content}</div>
      </div>
    </div>
  )
}
