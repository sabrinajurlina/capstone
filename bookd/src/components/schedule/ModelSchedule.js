// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';


// const Book = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'light' ? '#C9B79C' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function ListBook(books) {
//   return (
//     <>
//     <Box display='flex' width='50vw' margin='auto'>
//       <Grid item={true} sx={{m:1, pr:0, border: '.1px solid #C9B79C', borderRadius:1}}>
//         <Grid item={true} sm={12} xs={12} md={12}>
//         {books.map((book) => (
//           <Book sx={{display:"flex",  flexDirection:"row", alignItems:"center"}}>
//             <Avatar alt={book.title} variant="rounded" src={book.img} sx={{height:'100%', width:'100%', marginLeft:'15%'}}/>
//           <Grid item={true} sm={12} xs={12} md={12} sx={{ml:2}}>
//                 <Typography variant="subtitle1"> 
//                   <strong>Title:</strong>
//                 </Typography>
//                 <Typography variant="body1"> 
//                   {book.title}
//                 </Typography>
//                 <Typography variant="subtitle1"> 
//                   <strong>Author:</strong>
//                 </Typography>
//                 <Typography variant="body1"> 
//                   {book.author}
//                 </Typography>
//                 <Typography variant="subtitle1"> 
//                   <strong>Description:</strong>
//                 </Typography>
//                 <Typography variant="body1"> 
//                   {book.desc}
//                 </Typography>
//                 <Typography variant="subtitle1"> 
//                   <strong>Subject:</strong>
//                 </Typography>
//                 <Typography variant="body1"> 
//                   {book.subject}
//                 </Typography>
//             </Grid>
//             </Book>
//           ))}
//         </Grid>  
//       </Grid>
//     </Box>
//     </>     
//   )
// }