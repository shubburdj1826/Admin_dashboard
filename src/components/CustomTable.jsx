import { styled } from '@mui/material/styles';
import {Table,Paper,TableRow,TableHead,TableContainer ,TableCell,tableCellClasses,TableBody }from '@mui/material';
import { Visibility } from '@mui/icons-material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgba(1, 91, 196, 0.10)',
    color: theme.palette.common.black,
    fontSize:12,
    StyledTableRow:80,
    fontWeight:600
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    fontWeight:500
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#FBFBFB',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomTable({row,page}) {
  const [datas,setDatas] = useState([]);
  useEffect(()=>{
    const getData = async ()=>{
      const res = await axios.get(`https://dummyjson.com/users?limit=${row}&skip=${row*(page-1)}`);
      // console.log(res.data.users);
      setDatas(res.data.users)
    }
    getData();
  },[setDatas,row,page])
  // console.log(datas)
  return (
    // style={{height:"90%"}}
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow sx={{height:10}}>
            <StyledTableCell>Domain Name</StyledTableCell>
            <StyledTableCell >Domain</StyledTableCell>
            <StyledTableCell >Contact Details</StyledTableCell>
            <StyledTableCell >Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data,index) => (
            <StyledTableRow key={index} sx={{height:-1}}>
              <StyledTableCell component="th" scope="row">
                {data.company.department}
              </StyledTableCell>
              <StyledTableCell style={{color:'#015BC4',textDecoration:'underline'}} >{data.domain}</StyledTableCell>
              <StyledTableCell >{data.address.address}</StyledTableCell>
              <StyledTableCell >{<Visibility/>}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
