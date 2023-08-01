import React from 'react'
import './content.scss'
import {
    Routes,
    Route,
  } from "react-router-dom";
import Dashboard from './Dashboard';
import DepartmentManagement from './DepartmentManagement';
import ManageBot from './ManageBot';
import HelpQueryManagement from './HelpQueryManagement';
import QueryTypeManagement from './QueryTypeManagement';
import PageNotFound from './PageNotFound';
import ViewDetails from './ViewDetails';
import DepartmentList from './DepartmentList';
import AddNewDepartment from './AddNewDepartment';
import EditDepartment from './EditDepartment';


export default function Content() {
  return (
    <div className='content-container'>
      <Routes>
          <Route path='/'>
            <Route index element={<Dashboard/>}/>
            <Route path='departmentList' element={<DepartmentList/>}/>
            <Route path='addNewDepartment' element={<AddNewDepartment/>}/>
            <Route path='editDepartment' element={<EditDepartment/>}/>
            <Route path='viewDetails' element={<ViewDetails/>}/>
            <Route path='departmentManagement' element={<DepartmentManagement/>}/>
            <Route path='manageBot' element={<ManageBot/>}/>
            <Route path='helpQueryManagement' element={<HelpQueryManagement/>}/>
            <Route path='queryTypeManagement' element={<QueryTypeManagement/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
    </div>
  )
}
