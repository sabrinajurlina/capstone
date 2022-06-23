import React, { useState } from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(month, jobs, income, paid, unpaid) {
  return {
    month,
    jobs,
    income,
    paid,
    unpaid,
    history:[
      {clientName: 'Neiman Marcus',
      location: 'Dallas',
      date: '2-15-2022',
      rate: 1000
      },
      {clientName: 'Corkcicle',
      location: 'Salt Lake City',
      date: '1-10-2022',
      rate: 3000
      },
      {clientName: 'Maria Pinto',
      location: 'Chicago',
      date: '3-15-2022',
      rate: 1000
      },

    ]
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment sx={{width:'80vw'}}>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' }, width:'80vw' }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon sx={{color:'#ffffff'}}/> : <KeyboardArrowDownIcon sx={{color:'#ffffff'}}/>}
          </IconButton>
        </TableCell>
        <TableCell sx={{color:'#ffffff', fontSize:'large'}} component="th" scope="row">
          {row.month}
        </TableCell>
        <TableCell sx={{color:'#ffffff', fontSize:'large'}} align="right">{row.jobs}</TableCell>
        <TableCell sx={{color:'#ffffff', fontSize:'large'}} align="right">${row.income}</TableCell>
        <TableCell sx={{color:'#ffffff', fontSize:'large'}} align="right">${row.paid}</TableCell>
        <TableCell sx={{color:'#ffffff', fontSize:'large'}} align="right">${row.unpaid}</TableCell>
      </TableRow>
    </React.Fragment>
  
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    month: PropTypes.string.isRequired,
    jobs: PropTypes.number.isRequired,
    income: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        clientName: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired
      }),
    ).isRequired,
    paid: PropTypes.number.isRequired,
    unpaid: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('January', 10, 7000, 1000, 6000),
  createData('February', 3, 2000, 0, 2000),
  createData('March', 5, 6000, 1500, 4500),
  createData('April', 3, 4000, 750, 3250),
  createData('May', 4, 2000, 0, 2000)
];

export default function StatementTable() {
  return (
    <>
    <Typography variant='h4' sx={{color:'black', pt:10, pl:20}}>Your Statement Overview:</Typography>
    <hr></hr>
    <TableContainer component={Paper} sx={{display:'flex', width:'70vw', margin:'auto', mt:5, backgroundColor: '#281c4b', backgroundImage: '#281c4b'}}>
      <Table aria-label="collapsible table">
        <TableHead sx={{color:'#f10065'}}>
          <TableRow sx={{color:'#f10065'}}>
            <TableCell sx={{color:'#f10065', fontSize:'large'}}/>
            <TableCell sx={{color:'#f10065', fontSize:'large'}}>Month</TableCell>
            <TableCell align="right" sx={{color:'#f10065', fontSize:'large'}}>Jobs</TableCell>
            <TableCell align="right" sx={{color:'#f10065', fontSize:'large'}}>Income</TableCell>
            <TableCell align="right" sx={{color:'#f10065', fontSize:'large'}}>Paid</TableCell>
            <TableCell align="right" sx={{color:'#f10065', fontSize:'large'}}>Unpaid</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{color:'#f10065', fontSize:'large'}}>
          {rows.map((row) => (
            <Row key={row.month} row={row} sx={{color:'#ffffff', fontSize:'large'}}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}


// export default function Scheduler(){
  
//     const bookingHistory = [
//     {
//       id: 4,
//       body: 'Ecommerce booking with Neiman Marcus, shooting swimwear and loungewear.',
//       date: '2022-06-20',
//       clientId: 5,
//     }, {
//       id: 1,
//       body: 'Fall Campaign for Corkcicle shooting their new line of athletic waterbottles.',
//       date: '2022-03-02',
//       clientId: 6,
//     }, {
//       id: 2,
//       body: 'Maria Pinto LookBook',
//       date: '2022-2-28',
//       clientId: 7,
//     }, {
//       id: 3,
//       body: 'Neiman Marcus evening wear ecommerce shoot',
//       date: '2022-4-28',
//       clientId: 5,
//     }, {
//       id: 4,
//       body: 'Kohls holiday shoot',
//       date: '2022-5-28',
//       clientId: 8,
//     }
//   ];

//   return (
//     <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
//       {bookings.map((booking) => (
//     </Box>
//   );
// };