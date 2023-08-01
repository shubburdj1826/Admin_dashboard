import React, { useState } from "react";
import "./departmentList.scss";
import { Button, Pagination } from "@mui/material";
import { ControlPoint } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TableForDepartmentList from "./TableForDepartmentList";
import { useNavigate } from "react-router-dom";

export default function DepartmentList() {
  const navigate = useNavigate();
    const [searchKey,setSearchKey] = useState("");
    const [numOfROw, setNumOfRow] = React.useState("10");
    const [numOfPage, setNumOfPage] = React.useState("1");
    
    const handleNumberOfRow = (event) => {
        setNumOfRow(event.target.value);
    };

    // handle search function 
    const handleSearch = (event)=>{
      setSearchKey(event.target.value)
    }

  return (
    <div className="viewDetails-container">
      <div className="viewdetails-nav-txt">
        <span >Department list</span> 
      </div>
      <div className="details-container">
        <div className="detail-first">
        <div className="details1">
          <div className="logo1">
            <img src="assets/images/clipboard-export.png" alt="clip-ex" />
          </div>
          <div className="logo-txt1">
            <span className="text1">6452</span>
            <br />
            <span className="text2">Total Department</span>
          </div>
        </div>

        <div className="details1">
          <div className="logo2">
            <img src="assets/images/clipboard-tick.png" alt="clip-tick" />
          </div>
          <div className="logo-txt1">
            <span className="text1">6452</span>
            <br />
            <span className="text2">Total Domain</span>
          </div>
        </div>
        </div>
        

        <div className="details2">
          {/* <div className="logo3">
            <img src="assets/images/close.png" alt="edit" />
          </div> */}
        </div>
      </div>

      <div className="details-table-container">
        <div className="filterOption">
          <div className="filter-container">
            <div className="filterInput">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Selected date from"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: "2.3rem",
                        height: "3.3rem",
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </div>

            <div className="filterInput">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Selected date to"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: "2.3rem",
                        height: "3.3rem",
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </div>

            <div className="filterInput">
              <input type="search" name="search" onChange={handleSearch} id="search" placeholder="&#x1F50D; Search" />
            </div>
          </div>

          <div className="addDomainBtn">
            <Button
            onClick={()=>navigate('/addNewDepartment')}
              style={{
                textTransform: "capitalize",
                borderRadius: "5px",
                fontSize: "16px",
                fontWeight: "500",
                // margin: "20px 0 12px 20px",
              }}
              variant="contained"
              startIcon={<ControlPoint />}
            >
              Add new Department
            </Button>
          </div>
        </div>
        <div className="table-container">
          {/* <CustomTable row={numOfROw} page={numOfPage} /> */}
          <TableForDepartmentList row={numOfROw} page={numOfPage} searchKey={searchKey}/>
        </div>
      </div>

      <div className="pagination">
        <Pagination
          count={100 / +numOfROw}
          variant="outlined"
          onChange={(e, page) => {
            setNumOfPage(page);
          }}
          shape="rounded"
          boundaryCount={2}
        />
        <select
          name="numOfROw"
          id="numOfRow"
          onChange={handleNumberOfRow}
          className="select-page"
        >
          {/* <option value={100}>100</option> */}
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
}
