import React, { useState } from "react";
import "./Sidemenu.css";
import { FaUserAlt } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa";
import { IoArchive } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidemenu = () => {

  const navigate = useNavigate();

  const [selectedMenu, setSelectedMenu] = useState("");
  return (
    <div className="sidemenu-container">
      <div className="sidemenu-user">
        <div className="user-icon">
          <FaUserAlt />
          <div className="user-option-menu">
            <ul>
              <li>
                <MdManageAccounts /> Manage your Account
              </li>
              <li onClick={()=>navigate('/sign-in')}>
                <FaSignOutAlt /> Sign in
              </li>
            </ul>
          </div>  
        </div>
        <h2>User.new</h2>
      </div>
      <div
        className={`sidemenu-options ${
          selectedMenu === "subjects" && "full-flex"
        }`}
      >
        <div
          className="sidemenu-items"
          onClick={() => {
            if (selectedMenu === "home") {
              return setSelectedMenu("");
            } else {
              setSelectedMenu("home");
            }
          }}
        >
          <h3>
            <GoHomeFill /> Home
          </h3>
          {selectedMenu === "home" && <hr />}
        </div>
        <div
          className="sidemenu-added-subjects"
          onClick={() => {
            if (selectedMenu === "subjects") {
              return setSelectedMenu("");
            } else {
              setSelectedMenu("subjects");
            }
          }}
        >
          <h3>
            <div
              className={`sidemenu-dropdown ${
                selectedMenu === "subjects" && "open"
              }`}
            >
              <FaCaretDown />
            </div>{" "}
            Added Subjects
          </h3>
          {selectedMenu === "subjects" && <hr />}
        </div>
        {selectedMenu === "subjects" && (
          <div className="all-subjects">
            <div className="subject-box"></div>
          </div>
        )}
      </div>
      <div className="sidebar-middle-line">
        <hr />
      </div>
      <div className="sidebar-bottom">
        <div
          className="sidebar-archive"
          onClick={() => {
            if (selectedMenu === "archive") {
              return setSelectedMenu("");
            } else {
              setSelectedMenu("archive");
            }
          }}
        >
          <h3>
            <IoArchive /> Archived
          </h3>
          {selectedMenu === "archive" && <hr />}
        </div>
        <div
          className="sidebar-settings"
          onClick={() => {
            if (selectedMenu === "setting") {
              return setSelectedMenu("");
            } else {
              setSelectedMenu("setting");
            }
          }}
        >
          <h3>
            <IoSettings /> Settings
          </h3>
          {selectedMenu === "setting" && <hr />}
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
