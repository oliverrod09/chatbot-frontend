import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

import Home from "./pages/Home";
import Reg from './pages/Reg'
import Login from './pages/Login'
import RegChat from './pages/RegChat'
import Logout from './pages/Logout';
import NoAccess from './pages/NoAccess';
import NotFound from "./pages/NotFound";
import ListChat from './pages/ListChat';

function App() {

  return (
    <>
      <Router>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<Reg></Reg>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/regchat' element={<RegChat></RegChat>}></Route>
        <Route path='/logout' element={<Logout></Logout>}></Route>
        <Route path='/noacces' element={<NoAccess></NoAccess>}></Route>
        <Route path='/listchat' element={<ListChat></ListChat>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
