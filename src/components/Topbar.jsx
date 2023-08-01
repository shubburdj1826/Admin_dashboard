import React from 'react'
import './topbar.scss'
import { useNavigate } from 'react-router-dom'
// import {Link} from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();
  return (
    <div className='topbar-container'>
      <div className="left">
            <img onClick={()=>navigate('/')} src="assets/images/chatbot.png" alt="chatbot" />
            <p onClick={()=>navigate('/')}>Chatbot<br/>Management System</p>
      </div>
      <div className="right">
        <div className="user-img">
        <img src="assets/images/user.png" alt="user" />
        </div>
        <div className="user-content">
            <span className='name'>Deepak</span>
            <span className='admin'>Admin</span>
        </div>
      </div>
    </div>
  )
}
