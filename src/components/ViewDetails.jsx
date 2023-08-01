import * as React from 'react';
import './viewDetails.scss'
import CustomTable from './CustomTable';
import { Button, Pagination} from '@mui/material';
import { ControlPoint } from '@mui/icons-material';


export default function ViewDetails() {
    const [numOfROw, setNumOfRow] = React.useState('10');
    const [numOfPage, setNumOfPage] = React.useState('1');
    const handleNumberOfRow = (event) => {
    setNumOfRow(event.target.value);
    };

  return (
    <div className="viewDetails-container">
        <div className="viewdetails-nav-txt">
            <span id='nav1'>Department list</span>
            <span className='nav2'>{'\u3009'}</span>
            <span className='nav2'>View Detail</span>
        </div>
        <div className="details-container">

            <div className="details1">
                <div className="logo1">
                    <img src="assets/images/clipboard-export.png" alt="clip-ex" />
                </div>
                <div className="logo-txt1">
                    <span className='text1'>Forest Department</span><br/>
                    <span className='text2'>Department Name</span>
                </div>
            </div>

            <div className="details1">
                <div className="logo2">
                    <img src="assets/images/clipboard-tick.png" alt="clip-tick" />
                </div>
                <div className="logo-txt1">
                    <span className='text1'>XYZ Area, Jammu ,1123</span><br/>
                    <span className='text2'>Department Location</span>
                </div>
            </div>

            <div className="details2">
                <div className="logo3">
                <img src="assets/images/close.png" alt="edit" />
                </div>
            </div>
            


        </div>
        <div className="details-table-container">
            <div className="addDomainBtn">
            <Button style={{textTransform:'capitalize',borderRadius:'5px',fontSize:'16px',fontWeight:'500',margin:'20px 0 12px 20px'}} variant="contained" startIcon={<ControlPoint />}>
            Add Domain
            </Button>
            </div>
            <div className="table-container">
            <CustomTable row ={numOfROw} page={numOfPage} />
            </div>
        </div>
        
        <div className='pagination'>
        <Pagination count={100/ +numOfROw} 
       
        variant="outlined" onChange={(e,page)=>{
            setNumOfPage(page)
        }} shape="rounded" boundaryCount={2} />
        <select name="numOfROw" id="numOfRow" onChange={handleNumberOfRow} className='select-page'>
            {/* <option value={100}>100</option> */}
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
        </select>
        </div>
    </div>
  );
}