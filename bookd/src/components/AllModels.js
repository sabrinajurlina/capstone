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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useAllModels from '../hooks/useAllModels';

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

export default function AllModels(){
  const {models, error} = useAllModels();
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);
  const {user, setAlert}=useContext(AppContext)


  // const handleAddToSchedule=(job)=>{
  //   if (job.id in user.schedule.filter(jb=>jb.id)){
  //     setAlert(`Job with ID: ${job.id} has already been added to your schedule`)
  //     navigate('/jobs')
  //   }else{
  //     addToSchedule(job)
  //     setAlert(`${job.id} has been added to your schedule`)
  //     navigate('/calendar')
  //   }}

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  if(error){
    return(
      <Box sx={{width:"80vw", alignItems:'center', justifyContent:'center'}}>
        <Typography variant="h5" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          Check your dashboard for your calendar and available models!
        </Typography>
        {/* {error} */}
      </Box>
    )
  }
  if(!models){
    return(
      <Box sx={{display:'flex'}}>
        <CircularProgress sx={{alignItems:'center', justifyContent:'center'}}/>
      </Box>
    )
  }
  return (
    <>
    <Typography variant="h4" sx={{color:'black', pt:10, pl:20}}>Our Models:</Typography>
    <hr></hr>
    <Box sx={{display:'flex', pt: 5, margin:'auto', width:"80vw", alignItems:'space-between', justifyContent:'space-between'}}>
    {models.map((model) => (
      
      <Card key={model.id} sx={{pl:5, pr:5, width: 345 , wrap:'wrap'}}>
        <CardHeader
          avatar={
            <Avatar sx={{ alignSelf:'flex-start', backgroundColor: '#ed5b2d' }} aria-label="initials">
              {`${model.first_name[0].toUpperCase()}${model.last_name[0].toUpperCase()}`}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={`${model.first_name} ${model.last_name}`}
          subheader={`${model.location}`}
        />
        <CardMedia
          component="img"
          height="194"
          image={`${model.img}`}
          alt={`${model.first_name}`}
        />
        <CardContent>
          <Typography variant="body2" color="text.primary">
            {`Height: ${model.height}`}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {`Hair: ${model.hair}`}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {`Eyes: ${model.eyes}`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <AddCircleIcon />
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
            <Typography variant="h6">Measurements:</Typography>
            <Typography paragraph>{`Waist: ${model.waist}`}</Typography>
            <Typography paragraph>{`Hips: ${model.hips}`}</Typography>
            <Typography paragraph>{`Bust: ${model.bust}`}</Typography>
            <Typography paragraph>{`Shoe: ${model.shoe}`}</Typography>
            <Typography variant="h6">Skills:</Typography>
            <Typography paragraph>{`${model.skills}`}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    ))}
    </Box>
    </>
  );
}
