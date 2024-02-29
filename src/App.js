import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { io } from "socket.io-client";
import Login from "./component/login/Login";
import "./App.scss"; // Corrected import statement
import Chat from "./component/Chat/Chat";


function App() {

  const [userValue, setUserValue] = useState("");
  
  useEffect(() => {
    const socket = io("http://localhost:8080");
    console.log(
      socket.on("firstEvent", (msg) => {
        console.log(msg);
      })
    );
  }, []);

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                !userValue.length ? (
                  <Login userValue={userValue} setUserValue={setUserValue} />
                ) : (
                  <Chat userValue={userValue} />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
