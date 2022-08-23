import React from "react";
import "./Notification.css";

const Notification = (props: any) => {
  return (
    <div className="notification-container">
      <div className="notification" >Successfully removed</div>
      <button className="undo-button">Undo</button>
    </div>
  );
};

export default Notification;
