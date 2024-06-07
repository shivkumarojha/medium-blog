import { Routes, Route, BrowserRouter } from "react-router-dom"
import "./App.css"
import Signup from "./pages/Signup"
import SignIn from "./pages/SignIn"
import Blog from "./pages/Blog"

// toast css
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
