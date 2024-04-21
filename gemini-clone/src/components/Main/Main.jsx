import React from 'react';
import "./Main.css";
import { assets } from '../../assets/assets';

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Rau Group</p>
            <img className='user_icon' src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggested application for Telco operations</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Leaders and their impacts using AI</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Holistic AI Deployment</p>
                    <img src={assets.code_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: granular networking</p>
                    <img src={assets.message_icon} alt="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className='bottom-info'>
                    Gemini may display inaccurate information, including about people, so double-check its responses. Your privacy and a Gemini application
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main