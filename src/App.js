import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/join";
import Find from "./pages/emailPwFind";
import Change from "./pages/changepw";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Signup />} />
        <Route path="/idpw" element={<Find />} />
        <Route path="/change" element={<Change />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
