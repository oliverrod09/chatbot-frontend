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
  const checkStorage = JSON.parse(sessionStorage.getItem("check"));
  const [mode, setMode] = useState(sessionStorage.getItem("mode")||"")
  const [check, setCheck] = useState(checkStorage)
  const [sesion, setSesion] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setSesion(true)
    }

    // if (sessionStorage.getItem()) {
      
    // }
    
    
  
  }, [])

  useEffect(() => {
    sessionStorage.setItem("mode", mode)
    sessionStorage.setItem("check", check)
    
  }, [mode])
  

  function handleMode(){
    if (check) {
      setMode("")
      setCheck(false)
      
    }else{
      setMode("dark")
      setCheck(true)
    }
  }

  function isLogin() {
    setSesion(true)
  }

  function isLogout() {
    setSesion(false)
  }
  return (
    <>
      <Router>
        <div className={`${mode}`}>
          <Nav sesion={sesion} check={check} handleMode={handleMode}></Nav>
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
