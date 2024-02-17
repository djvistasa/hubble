import { Navigate } from "react-router-dom";
import { IProtectedRoute } from "./types";

const ProtectedRoute = ({ children }: IProtectedRoute) => {
  const isAuthenticated = true; // custom hook to check if user is authenticated

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
