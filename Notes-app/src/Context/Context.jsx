import { createContext, useState, useRef } from "react";

export const appContext = createContext();

function ContextApi({ children }) {
  const [openCreateForm, setOpenCreateForm] = useState(false);

  const [roomId, setRoomId] = useState(0);

  const [roomList, setRoomList] = useState([]);

  const classNameRef = useRef();
  const sectionNameRef = useRef();
  const subjectNameRef = useRef();

  function handleCreatingRoom(className, sectionName, subjectName) {
    setRoomId((prev) => prev + 1);
    if (className.length === 0 && sectionName.length === 0) {
      const newRoomAdded = [{
        id: roomId,
        subjectName,
      }, ...roomList];
      return setRoomList(newRoomAdded);
    } else if (className.length === 0) {
      const newRoomAdded = [{
        id: roomId,
        sectionName,
        subjectName,
      }, ...roomList];
      return setRoomList(newRoomAdded);
    } else if (sectionName.length === 0) {
      const newRoomAdded = [{
        id: roomId,
        className,
        subjectName,
      }, ...roomList];
      return setRoomList(newRoomAdded);
    } else {
      const newRoomAdded = [{
        id: roomId,
        className,
        subjectName,
        sectionName,
      }, ...roomList];
      return setRoomList(newRoomAdded);
    }
  }

  const contextValues = {
    openCreateForm,
    setOpenCreateForm,
    classNameRef,
    sectionNameRef,
    subjectNameRef,
    handleCreatingRoom,
    roomList,
    setRoomList,
  };

  return (
    <appContext.Provider value={contextValues}>{children}</appContext.Provider>
  );
}

export default ContextApi;
