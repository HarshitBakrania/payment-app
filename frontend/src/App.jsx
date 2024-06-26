import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignUp } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { Dashboard } from "./pages/Dashboard"
import { SendMoney } from "./pages/SendMoney"
import { Index } from "./components/Index"

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path = "/signup" element = {<SignUp />} />
            <Route path = "/signin" element = {<Signin />} />
            <Route path = "/dashboard" element = {<Dashboard />} />
            <Route path = "/send" element = {<SendMoney />} />
            <Route path = "/" element = {<Index />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
