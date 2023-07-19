import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Reg from "./pages/Reg";
import Login from "./pages/Login";
import RegChat from "./pages/RegChat";
import Logout from "./pages/Logout";
import NoAccess from "./pages/NoAccess";
import NotFound from "./pages/NotFound";
import ListChat from "./pages/ListChat";

function App() {
  const [mode, setMode] = useState("dark")
  const [sesion, setSesion] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setSesion(true)
    }
  
    
  }, [])
  

  function isLogin() {
    setSesion(true)
  }

  function isLogout() {
    setSesion(false)
  }
  return (
    <>
      <Router>
        <div className="dark">
          <Nav sesion={sesion}></Nav>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/register" element={<Reg sesion={sesion}></Reg>}></Route>
            <Route path="/login" element={<Login isLogin={isLogin}></Login>}></Route>
            <Route path="/regchat" element={<RegChat sesion={sesion}></RegChat>}></Route>
            <Route path="/logout" element={<Logout isLogout={isLogout}></Logout>}></Route>
            <Route path="/noacces" element={<NoAccess></NoAccess>}></Route>
            <Route path="/listchat" element={<ListChat sesion={sesion}></ListChat>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
