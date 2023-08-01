import React from 'react'
import './sidebar.scss'
import {NavLink} from 'react-router-dom'

export default function Sidebar() {
  // const navLinkStyle = ({isActive})=>{
  //   return {
  //     border:isActive?"1px solid rgba(255, 255, 255, 0.20)":"0",
  //     borderRadius:isActive?"0.5rem":"0",
  //     background:isActive?"rgba(255, 255, 255, 0.10)":"",
  //     width:isActive?"87%":""
  //   }
  // }
  return (
          <div className="sidebar">
            <div className="sidebar-content">
              <NavLink to='/'>Dashboard</NavLink>
              <NavLink to='/departmentList'>Department Management</NavLink>
              <NavLink to='/manageBot'>Manage Bot</NavLink>
              <NavLink to='/helpQueryManagement'>Help & Queries Management</NavLink>
              <NavLink to='/queryTypeManagement'>Query Type Management</NavLink>

              {/* both are work as same  */}
              

              {/* <NavLink to='/' style={navLinkStyle}>Dashboard</NavLink>
              <NavLink to='/departmentManagement' style={navLinkStyle}>Department Management</NavLink>
              <NavLink to='/manageBot' style={navLinkStyle}>Manage Bot</NavLink>
              <NavLink to='/helpQueryManagement' style={navLinkStyle}>Help & Queries Management</NavLink>
              <NavLink to='/queryTypeManagement' style={navLinkStyle}>Query Type Management</NavLink> */}
            </div>
          </div>
  )
}
