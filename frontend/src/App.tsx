import { Routes, Route, useNavigate } from "react-router-dom"
import "./App.css"
import Signup from "./pages/Signup"
import SignIn from "./pages/SignIn"
import Blog from "./pages/Blog"
// toast css
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import HomePage from "./pages/HomePage"
import { CreateBlog } from "./pages/CreateBlog"
import { SingleBlog } from "./pages/SingleBlog"
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="blog/:id" element={<SingleBlog />} />
      </Routes>
    </>
  )
}

export default App
