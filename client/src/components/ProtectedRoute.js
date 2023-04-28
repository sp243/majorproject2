import { Navigate } from "react-router-dom";
 
export function ProtectedWrapper({ children }) {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
}