import React from 'react';
import Home from "./components/pages/home/Home.jsx"
import TopBar from "./components/topbar/TopBar.jsx"
import Single from "./components/pages/single/Single.jsx"
import Write from "./components/pages/write/Write.jsx"
import Settings from "./components/pages/setting/Setting.jsx"
import Login from "./components/pages/login/Login.jsx"
import Register  from "./components/pages/register/Register.jsx"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
console.log("react version is", React.version)
function App() {
  const user=false;
  return (
    <Router>
        <TopBar/>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/register" element={user ? <Home/> : <Register/>}/>
              <Route path="/login" element={user ? <Home/> : <Login/>}/>
              <Route path="/write" element={user ? <Write/> : <Home/>}/>
              <Route path="/settings" element={user ? <Home/> : <Settings/>}/>
              <Route path="/post/:postId" element={<Single/>}/>
        </Routes>
    </Router>
  );

}

export default App;
