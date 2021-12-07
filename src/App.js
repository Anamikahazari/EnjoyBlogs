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
  const user=true;
  return (
    <>

    <Router>
        <TopBar/>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/register">
              {user ? <Home/> : <Register/>}
              </Route>
              <Route path="/login">
              {user ? <Home/> : <Login/>}
              </Route>
              <Route path="/write">
              {user ? <Home/> : <Register/>}
              </Route>
              <Route path="/settings">
              {user ? <Home/> : <Settings/>}
              </Route>
              <Route path="/post/:postId">
              <Single/>
              </Route>
        </Routes>
    </Router>
    </>
  );

}

export default App;
