import React, { useContext, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import "./Home.css";
import { appContext } from "../../Context/Context";

const Home = () => {
  const { setOpenCreateForm, roomList } = useContext(appContext);

  return (
    <div className="home-contaner">
      <nav>
        <h1>
          <span>All</span> Subjects
        </h1>
        <div className="creat-btn" onClick={() => setOpenCreateForm(true)}>
          <IoAddOutline />
        </div>
      </nav>
      <div className="home-all-subjects">
        {roomList.length > 0 && (
          roomList.map((item) => (
            <div key={item.id} className="created-subject">
              <h1>{item.className}</h1>
              {item.subjectName && <p>{item.subjectName}</p>}
              {item.sectionName && <span>{item.sectionName}</span>}
            </div>
          ))
        )}
        <div
          className="creat-subject-box"
          onClick={() => setOpenCreateForm(true)}
        >
          <p>
            <IoAddOutline /> Creat Subject
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
