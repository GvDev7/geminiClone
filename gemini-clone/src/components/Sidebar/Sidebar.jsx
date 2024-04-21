import React from 'react';
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <img className='menu' src={assets.menu_icon} alt="menu icon" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="plus symbol to add new chat" />
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p className="recent-title">Recent</p>
            </div>
        </div>
        <div className="bottom">

        </div>
    </div>
  )
}

export default Sidebar