import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ROUTES from "@/constants/routes";
import Layout from "@/components/molecules/Layout";
import Gnb from "@/components/organisms/Gnb";
import "./index.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Gnb routes={ROUTES} />
        <Layout className="my-0 mx-auto max-w-7xl px-4">
          <Routes>
            {ROUTES.map(({ path, Component }, index) => (
              <Route element={<Component />} key={index} path={path} />
            ))}
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
