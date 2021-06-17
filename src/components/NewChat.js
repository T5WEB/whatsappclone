import React from "react";
import "./NewChat.css";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default ({ user, chatList, show, setShow }) => {
  const [list, setList] = React.useState([
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Tiago",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Tiago",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Tiago",
    },
    {
      id: 123,
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
      name: "Tiago",
    },
  ]);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <div className="newChat" style={{ left: show ? 0 : -415 }}>
        <div className="newChat--head">
          <div className="newChat--backbutton" onClick={handleClose}>
            <ArrowBackIcon style={{ color: "#fff" }} />
          </div>
          <div className="newChat--headtitle">Nova Conversa</div>
        </div>
        <div className="newChat--list">
          {list.map((item, key) => (
            <div className="newChat--item" key={key}>
              <img className="newChat--itemavatar" src={item.avatar} alt="" />
              <div className="newChat--itemname">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
