import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Layout from "@/components/molecules/Layout";
import Gnb from "@/components/organisms/Gnb";
import "./index.css"


function App() {
  return (
    <BrowserRouter>
      <Layout.Box className="max-w-7xl my-0 mx-auto">
        <Gnb />
        <Layout.Box className="px-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout.Box>
      </Layout.Box>
    </BrowserRouter>
  )
}

export default App
