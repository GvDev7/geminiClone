import { useContext, useState } from 'react';
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from '../../context/Context';

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { onSent, previousPrompt, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

  return (
    <div className='sidebar'>
        <div className="top">
            <img className='menu' src={assets.menu_icon} alt="menu icon" onClick={()=>setIsOpen(!isOpen)}/>
            <div onClick={newChat()} className="new-chat">
                <img src={assets.plus_icon} alt="plus symbol to add new chat" />
                {isOpen?<p>New Chat</p>:null}
            </div>
            {isOpen?
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    {previousPrompt.map((item,index) => {
                        return (
                            <div onClick={() => loadPrompt(item)} className="recent-entry">
                                <img src={assets.message_icon} alt="message box icon" />
                                <p>{item.slice(0,18)} ...</p>
                            </div>
                        )
                    })}
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