import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./shared/ProtectedRoute";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* Protected Routes */}
      {/* Admin */}
      <Route element={<ProtectedRoute allowedRole="admin" />}></Route>
    </Routes>
  );
};

export default App;
