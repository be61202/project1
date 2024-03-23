import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/join";
import Find from "./pages/emailPwFind"
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/join" element={<Signup/>}/>
      <Route path="/idpw" element={<Find/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
