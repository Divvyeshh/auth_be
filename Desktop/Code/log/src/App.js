import React from "react";
import Register from "./components/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" Component={Register}/>
          <Route path="/login" Component={Login} />
          <Route path="/home" Component={Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
