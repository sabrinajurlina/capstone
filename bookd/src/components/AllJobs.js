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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useAllJobs from '../hooks/useAllJobs';

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

export default function AllJobs(){
  const {jobs, error} = useAllJobs();
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const {user, schedule, addToSchedule, setAlert}=useContext(AppContext)
  
  const handleAddToSchedule=(job)=>{
    if (job.id in user.schedule.filter(jb=>jb.id)){
      setAlert(`Job with ID: ${job.id} has already been added to your schedule`)
      navigate('/jobs')
    }else{
      addToSchedule(job)
      setAlert(`${job.id} has been added to your schedule`)
      navigate('/calendar')
    }}

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if(error){
    return(
      <Box sx={{width:"80vw"}}>
        <Typography variant="h5" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          Check your dashboard for income, calendar, and available jobs!
        </Typography>
        {/* {error} */}
      </Box>
    )
  }
  if(!jobs){
    return(
      <Box sx={{display:'flex'}}>
        <CircularProgress sx={{alignItems:'center', justifyContent:'center'}}/>
      </Box>
    )
  }
  return (
    <>
    <Typography variant="h4" sx={{color:'black', pt:10, pl:20}}>Available Jobs:</Typography>
    <hr></hr>
    <Box sx={{display:'flex', pt: 5, margin:'auto', width:"80vw", alignItems:'space-between', justifyContent:'space-between'}}>
    {jobs.map((job) => (
      
      <Card key={job.id} sx={{pl:5, pr:5, width: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ backgroundColor: '#ed5b2d' }} aria-label="jobId">
              {job.id}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={`${job.location}`}
          subheader={`${job.job_date}`}
        />
        <CardMedia
          component="img"
          height="194"
          image="https://i.pinimg.com/564x/55/f6/8e/55f68e1fbbfb3a97de3447dea15fbe28.jpg"
          alt={`${job.id}`}
        />
        <CardContent>
          <Typography variant="body2" color="text.primary">
            {`Duration: ${job.duration}`}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {`Rate: ${job.rate}`}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {`Rate Type: ${job.rate_type}`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to schedule" onClick={()=>{handleAddToSchedule(job)}}>
            <AddCircleIcon />
          </IconButton>
          <IconButton aria-label="save for later">
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
            <Typography paragraph>{`Description: ${job.body}`}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    ))}
    </Box>
    </>
  );
}
