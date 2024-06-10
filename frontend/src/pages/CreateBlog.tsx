import { useState } from "react"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
export const CreateBlog = () => {
  const navigate = useNavigate()
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    publish: false,
  })
  return (
    <div>
      <InputBox
        id="title"
        label="Title for Blog"
        placeholder="Write something that matters...."
        type="text"
        onChange={(e) => {
          setBlog({
            ...blog,
            title: e.target.value,
          })
        }}
      />
      <InputBox
        id="content"
        label="Content of Blog"
        placeholder="....."
        type="text-area"
        onChange={(e) => {
          setBlog({
            ...blog,
            content: e.target.value,
          })
        }}
      />

      <InputBox
        id="publish"
        label="publish"
        placeholder=""
        type="checkbox"
        onChange={() => {
          setBlog({
            ...blog,
            publish: !blog.publish,
          })
        }}
      />
      <Button
        label={"Create Blog"}
        onClick={async () => {
          const response = await axios.post(
            `${BACKEND_URL}/api/v1/blog`,
            {
              title: blog.title,
              content: blog.content,
              published: blog.publish,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          console.log(response.data)
          navigate("/blog")
        }}
      />
    </div>
  )
}
