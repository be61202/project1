import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/join";
import Find from "./pages/emailPwFind";
import Change from "./pages/changepw";
import Additem from "./pages/AddItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Signup />} />
        <Route path="/idpw" element={<Find />} />
        <Route path="/change" element={<Change />} />
        <Route path="/add" element={<Additem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
