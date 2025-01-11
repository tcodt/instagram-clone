import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import { ToastContainer } from "react-toastify";
import PageLayout from "./layouts/PageLayout/PageLayout";

function App() {
  return (
    <>
      <ToastContainer />
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
