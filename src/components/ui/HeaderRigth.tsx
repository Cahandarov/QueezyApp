import searchIcon from "./images/search_icon_black.svg";
import selectIcon from "./images/select_icon.svg";
import LogoutModal from "./LogoutModal";
import Modal from "./Modal";
import { useState } from "react";


export default function HeaderRigth() {
  const [showModal, setShowModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  function HandleShowModal() {
    setShowModal(true);
  }
  function HandleCloseModal() {
    setShowModal(false);
  }


  const currentDate = new Date();
  const hour = +currentDate.getHours();
  return (
    <div id="header_rigth" className="flex gap-6 items-center justify-center relative">
      <button
        id="search_btn"
        className="w-14 h-14 rounded-2xl border-2 border-solid border-[#EFEEFC] flex items-center justify-center hover:border-2 hover:border-primaryColor transition-colors duration-300"
        onClick={() => HandleShowModal()}
      >
        <img src={searchIcon} alt="searcIcon" />
      </button>
      <div
        id="user_avatar_box"
        className="w-14 h-14 rounded-full bg-secondColor"
      ></div>
      <div
        id="header_rigth_rigth"
        className="flex flex-col justify-center item-start"
      >
        <div
          id="user_greeting"
          className="flex gap-1 items-center justify-start"
        >
          {hour > 5 && hour < 19 ? (
            <i
              className="pi pi-sun"
              style={{ fontSize: "1rem", color: "#9087e5" }}
            ></i>
          ) : (
            <i
              className="pi pi-moon"
              style={{ fontSize: "1rem", color: "#9087e5" }}
            ></i>
          )}

          <p className="font-medium text-xs font-Rubik text-primaryColor">
            {hour > 5 && hour < 12
              ? "GOOD MORNING"
              : hour >= 12 && hour < 17
                ? "GOOD AFTERNOON"
                : hour >= 17 && hour <= 23
                  ? "GOOD EVENING"
                  : "GOOD NIGHT"}
          </p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <p
            id="user_name"
            className="font-medium text-2xl font-Rubik text-black"
          >
            Madelyn Dias
          </p>
          <img id="select_icon" src={selectIcon} alt="select icon" onClick={()=>{setLogoutModal((prev)=>!prev)}} />
        </div>
      </div>
      {showModal ? <Modal HandleCloseModal={HandleCloseModal} /> : ""}
      {logoutModal?<LogoutModal/>:""}
    </div>
  );
}
