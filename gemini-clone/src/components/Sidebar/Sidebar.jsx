import { useState } from 'react';
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='sidebar'>
        <div className="top">
            <img className='menu' src={assets.menu_icon} alt="menu icon" onClick={()=>setIsOpen(!isOpen)}/>
            <div className="new-chat">
                <img src={assets.plus_icon} alt="plus symbol to add new chat" />
                {isOpen?<p>New Chat</p>:null}
            </div>
            {isOpen?
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="message box icon" />
                        <p>Can AI help my company?...</p>
                    </div>
                </div>
            : null}
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="question mark icon" />
                {isOpen?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="question mark icon" />
                {isOpen?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="question mark icon" />
                {isOpen?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar