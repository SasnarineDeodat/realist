import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./components/nav/Main";

function App() {
  return (
    <BrowserRouter>
      <Main />
      <Toaster />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
