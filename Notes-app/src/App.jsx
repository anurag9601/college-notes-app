import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Sidemenu from "./Components/Sidemenu/Sidemenu";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signin from "./Pages/Signin/Signin";
import Login from "./Pages/Login/Login";
import LoadingBar from "react-top-loading-bar";
import ClassroomCreateForm from "./Components/ClassroomCreateForm/ClassroomCreateForm";
import { appContext } from "./Context/Context";

const App = () => {
  const [progress, setProgress] = useState(0);

  const { openCreateForm, roomList } = useContext(appContext);

  // console.log(roomList);

  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }, []);

  return (
    <Routes>
      <Route path="/sign-in" element={<Signin />}></Route>
      <Route path="/log-in" element={<Login />}></Route>
      <Route
        path="/"
        element={
          <div className="app-container">
            {openCreateForm === true && (
              <div className="create-form">
                <ClassroomCreateForm />
              </div>
            )}
            <Sidemenu />
            <div className="app-right-container">
              <LoadingBar
                color="#4361ee"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
              />
              <Home />
            </div>
          </div>
        }
      />
    </Routes>
  );
};

export default App;
