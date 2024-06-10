import { useState } from "react"
import { InputBox } from "../components/InputBox"
import { Button } from "../components/Button"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import { Navbar } from "../components/NavBar"
export const CreateBlog = () => {
  const navigate = useNavigate()
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    publish: false,
  })
  return (
    <>
      <Navbar isAuthenticated={true} />
      <div className="p-4">
        <InputBox
          id="title"
          label="Title for Blog"
          placeholder="Title: Write something that matters...."
          type="text"
          onChange={(e) => {
            setBlog({
              ...blog,
              title: e.target.value,
            })
          }}
        />
        <div className="pt-3">
          <CKEditor
            editor={ClassicEditor}
            data="Content Of Blog"
            onReady={(editor) => {
              console.log("CKEditor5 React Component is ready to use!", editor)
            }}
            onChange={(event, editor) => {
              const data = editor.getData()
              console.log({ event, editor, data })
              setBlog({
                ...blog,
                content: data,
              })
            }}
          />
        </div>

        <div className="flex pt-3">
          <label htmlFor="publish">Publish</label>
          <input
          className="w-20 h-5"
            id="publish"
            placeholder=""
            type="checkbox"
            onChange={() => {
              setBlog({
                ...blog,
                publish: !blog.publish,
              })
            }}
          />
        </div>
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

        {/* Ck editor  */}
      </div>
    </>
  )
}
