import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ROUTES from "@/constants/routes";
import Layout from "@/components/molecules/Layout";
import Gnb from "@/components/organisms/Gnb";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Gnb routes={ROUTES} />
      <Layout className="my-0 mx-auto max-w-7xl">
        <Routes>
          {ROUTES.map(({ path, Component }, index) => (
            <Route element={<Component />} key={index} path={path} />
          ))}
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
