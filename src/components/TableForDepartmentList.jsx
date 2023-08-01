import { styled } from '@mui/material/styles';
import {Table,Paper,TableRow,TableHead,TableContainer ,TableCell,tableCellClasses,TableBody }from '@mui/material';
import { BorderColor, ToggleOn, Visibility } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteDepartment } from '../redux/Actions/addDepartmentAction';

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


export default function TableForDepartmentList({searchKey}){
  let allData = useSelector((state)=>state.department.department);
  const navigate = useNavigate();
  const dispatch =  useDispatch();

  const handleDeleteDepartment = (id)=>{
    const conf = window.confirm('Are you sure want to delete this entry');
    if(conf)dispatch(deleteDepartment(id))
  }

  // filter data array if searchKey present 
  if(searchKey){
    // eslint-disable-next-line
    allData = allData.filter((item)=>{
      if(item.department.toLowerCase().includes(searchKey.toLowerCase()) || item.address.toLowerCase().includes(searchKey.toLowerCase()) || item.postalCode.toLowerCase().includes(searchKey.toLowerCase()) || item.state.toLowerCase().includes(searchKey.toLowerCase()) || item.email.toLowerCase().includes(searchKey.toLowerCase())){
        return item;
      }
    })
  }
  return (
    // style={{height:"90%"}}
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow sx={{height:10}}>
            <StyledTableCell sx={{width:"3rem"}}>S No.</StyledTableCell>
            <StyledTableCell sx={{width:"9.7rem"}} >Department Name</StyledTableCell>
            <StyledTableCell sx={{width:"9.7rem"}} >Department Address</StyledTableCell>
            <StyledTableCell sx={{width:"8.6rem"}} >Total number of domain</StyledTableCell>
            <StyledTableCell sx={{width:"9.7rem"}}>Date Added</StyledTableCell>
            <StyledTableCell sx={{width:"9.7rem"}}>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allData?.map((data,index) => (
            <StyledTableRow key={index} sx={{height:-1}}>
              <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell style={{color:'#015BC4',textDecoration:'underline'}} >{data.department}</StyledTableCell>
              <StyledTableCell >{data.address}</StyledTableCell>
              <StyledTableCell >1</StyledTableCell>
              <StyledTableCell >{data.createdAt}</StyledTableCell>
              <StyledTableCell >{<BorderColor style={{cursor:"pointer"}} onClick={()=>navigate('/editDepartment',{state:{data}})}/>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<Visibility style={{cursor:"pointer"}} onClick={()=>handleDeleteDepartment(data.id)}/>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<ToggleOn style={{cursor:"pointer"}} sx={{color:"rgba(112, 182, 115, 1)"}}/>}</StyledTableCell>
            </StyledTableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

