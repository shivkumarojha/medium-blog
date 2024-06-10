import { BlogType } from "../pages/Blog"
import { useNavigate } from "react-router-dom"
import { AuthorType } from "../pages/Blog"
export const BlogCard = ({
  blog,
  author,
}: {
  blog: BlogType
  author: AuthorType
}) => {
  const navigate = useNavigate()
  return (
    <div
      className="flex  w-full p-10"
      key={blog.id}
      onClick={() => {
        const id = blog.id
        navigate(`/blog/${id}`)
      }}
    >
      <div className="border-b-4 w-full">
        <div className="flex flex-row">
          <div className="flex justify-center w-7 h-7 rounded-full bg-slate-400 text-white font-bold mr-2">
            {author.name[0]}
          </div>
          <div className="font-mono font-light pb-1">
            {author.name || "Anonymous"}
          </div>
        </div>

        <div className="text-xl mb-3">{blog.title}</div>
        <div
          dangerouslySetInnerHTML={{ __html: blog.content }}
          className="pb-4"
        ></div>
      </div>
    </div>
  )
}
