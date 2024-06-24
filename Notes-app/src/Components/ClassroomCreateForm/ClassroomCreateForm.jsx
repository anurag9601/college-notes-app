import React, { useContext, useState, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import "./ClassroomCreateForm.css";
import { IoIosExit } from "react-icons/io";
import { appContext } from "../../Context/Context";
import LoadingBar from "react-top-loading-bar";

const ClassroomCreateForm = () => {
  const {
    setOpenCreateForm,
    openCreateForm,
    classNameRef,
    sectionNameRef,
    subjectNameRef,
    handleCreatingRoom,
  } = useContext(appContext);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }, [openCreateForm]);

  function handleCreatRoombutton() {
    if(subjectNameRef.current.value.length === 0){
      return null
    }
    const className = classNameRef.current.value;
    const sectionName = sectionNameRef.current.value;
    const subjectName = subjectNameRef.current.value;
    handleCreatingRoom(className, sectionName, subjectName);
    setOpenCreateForm(false);
  }

  function handleFormSubmit(event){
    event.preventDefault();
  }

  return (
    <form className="creat-box-container" onSubmit={(event)=>handleFormSubmit(event)}>
      <LoadingBar
        color="#4361ee"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="creat-head">
        <h1>Create Room</h1>
        <div className="creat-exit" onClick={() => setOpenCreateForm(false)}>
          <IoIosExit />
        </div>
      </div>
      <div className="creat-input-box">
        <p>Class Name (optional)</p>
        <input
          type="text"
          placeholder="Enter your class name"
          ref={classNameRef}
        />
      </div>
      <div className="creat-input-box">
        <p>Section Name (optional)</p>
        <input
          type="text"
          placeholder="Enter your section"
          ref={sectionNameRef}
        />
      </div>
      <div className="creat-input-box">
        <p>Subject Name</p>
        <input
          type="text"
          placeholder="Enter subject name"
          ref={subjectNameRef}
          required
        />
      </div>
      <div className="create-btn">
        <button type="submit" onClick={()=>handleCreatRoombutton()}>
          <IoIosAdd /> Create
        </button>
      </div>
    </form>
  );
};

export default ClassroomCreateForm;
