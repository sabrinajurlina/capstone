import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {useNavigate} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useAllClients from '../hooks/useAllClients';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function AllClients(){
  const {clients, error} = useAllClients();
  // const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const {user, schedule, addToSchedule, setAlert}=useContext(AppContext)
  
//   const handleAddToSchedule=(job)=>{
//     if (job.id in user.schedule.filter(jb=>jb.id)){
//       setAlert(`Job with ID: ${job.id} has already been added to your schedule`)
//       navigate('/jobs')
//     }else{
//       addToSchedule(job)
//       setAlert(`${job.id} has been added to your schedule`)
//       navigate('/calendar')
//     }}

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if(error){
    return(
      <>
      <Box sx={{width:"80vw"}}>
        <Typography variant="h5" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          Hmm. We're experiencing an unknown error. Check back in a bit. View your dashboard for income, calendar, and available jobs!
        </Typography>
      </Box>
      </>
    )
  }
  if(!clients){
    return(
      <>
      <Box sx={{display:'flex'}}>
        <CircularProgress sx={{alignItems:'center', justifyContent:'center'}}/>
      </Box>
      </>
    )
  }
  return (
    <>
    
    <Typography variant="h5" sx={{color:'black', pt:10, pl:20}}>Browse Clients:</Typography>
    <hr></hr>
    <Box sx={{display:'flex', pt: 5, margin:'auto', width:"80vw", alignItems:'space-between', justifyContent:'space-between'}}>
    {clients.map((client) => (
      
      <Card key={client.id} sx={{pl:0, width: 300 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: '#ed5b2d' }} aria-label="Client Info">
              {client.id}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={`${client.client_name}`}
          subheader= {<a target="_blank" href={`${client.website}`}>{client.website}</a>}
        />
        <CardMedia
          component="img"
          height="194"
          image={`${client.img}`}
          alt={`${client.client_name}`}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {`${client.description}`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="save for later">
          {/* onclick add client to favs */}
            <FavoriteIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{`Description: ${client.description}`}</Typography>
            <Typography paragraph>{`Location: ${client.location}`}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    ))}
    </Box>
    </>
  );
}
