import { Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";

function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<App />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;
