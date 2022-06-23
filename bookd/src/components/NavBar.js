import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {useNavigate} from 'react-router-dom';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ImageAvatar from './Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import useDeleteUser from '../hooks/useDeleteUser';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';

const drawerWidth = 240;


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  backgroundColor: '#281c4b',
  color: '#ffffff',
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#281c4b',
  color:'#ffffff',
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  backgroundColor: '#281c4b',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    backgroundColor: '#281c4b',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {user} = useContext(AppContext)
  const navigate = useNavigate()
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [deleteUser, setDeleteUser] = useState({})

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };

  useDeleteUser(deleteUser)

  const handleDelete=()=>{
    setDeleteUser(user)
  }

  return (
    <Box sx={{ display: 'flex', backgroundColor: theme.palette.background.paper, backgroundImage: theme.palette.background.paper }}> 
      <CssBaseline />
      <AppBar background-color='black' position="fixed" open={open}>
        <Toolbar sx={{backgroundColor:'#281c4b'}}>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon sx={{color:'#ffffff'}}/>
          </IconButton>
          {user?.role ==='model' ?
          <Typography sx={{flexGrow: 1}} color='white' variant="h6" noWrap component="div">
            Welcome back, {user?.first_name}
          </Typography>
          :
          <Typography sx={{flexGrow: 1}} color='white' variant="h6" noWrap component="div">
            Welcome back, {user?.client_name}
          </Typography>
          }
          <Tooltip title="Menu">
          <IconButton onClick={handleOpenUserMenu} sx={{p:0}}>
            <ImageAvatar/>
          </IconButton>
          </Tooltip>

          <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="left">
                    <Link to='/'  style={{textDecoration:'none', color:'black', fontSize:'smaller'}}>
                      Logout
                    </Link>
                  </Typography>
                </MenuItem>,
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="left">
                    <Link to='/editProfile' style={{textDecoration:'none', color:'black', fontSize:'smaller'}}>
                      Edit Profile
                    </Link>
                  </Typography>
                </MenuItem>,
              {user?.role ==='client' ?
                <MenuItem onClick={()=>{handleDelete()}}>
                <Typography textAlign="left">
                    <Link onClick={()=>{handleDelete()}} to='/clientRegister' style={{textDecoration:'none', color:'black', fontSize:'smaller'}}>
                    Delete Account
                    </Link>
                </Typography>
              </MenuItem>
              :
              <MenuItem onClick={()=>{handleDelete()}}>
              <Typography textAlign="left">
                  <Link onClick={()=>{handleDelete()}} to='/modelRegister' style={{textDecoration:'none', color:'black', fontSize:'smaller'}}>
                  Delete Account
                  </Link>
              </Typography>
              </MenuItem>
              }
            </Menu>              
        </Toolbar>
      </AppBar>
      <Drawer sx={{color:'white', backgroundColor:'#281c4b'}} variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon sx={{color:'#ffffff'}}/> : <ChevronLeftIcon sx={{color:'#ffffff'}}/>}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
            <ListItem key='Statement' disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: '#ffffff',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AssessmentRoundedIcon onClick={()=>navigate('/modelStatement')}/>
                </ListItemIcon>
                <ListItemText primary='Statement' sx={{ opacity: open ? 1 : 0 }} onClick={()=>navigate('/modelStatement')}/>
              </ListItemButton>
            </ListItem>
            <ListItem key='Jobs' disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: '#ffffff',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {user?.role === 'model'?
                  <WorkIcon onClick={()=>navigate('/jobs')}/>
                  :
                  <PersonIcon onClick={()=>navigate('/models')}/>
                  }
                </ListItemIcon>
                <ListItemText primary='Jobs' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem key='Calendar' disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: '#ffffff',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <InsertInvitationIcon />
                </ListItemIcon>
                <ListItemText primary='Calendar' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem key='Logout' disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: '#ffffff',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }} onClick={()=>navigate('/')}
                >
                  <ExitToAppOutlinedIcon/>
                </ListItemIcon>
                <ListItemText primary='Logout' sx={{ opacity: open ? 1 : 0 }} onClick={()=>navigate('/')}/>
              </ListItemButton>
            </ListItem>
            <ListItem key='Edit Profile' disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: '#ffffff',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }} onClick={()=>navigate('/editProfile')}
                >
                  <EditOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Edit Profile' sx={{ opacity: open ? 1 : 0 }} onClick={()=>navigate('/editProfile')}/>
              </ListItemButton>
            </ListItem>
        </List>        
      </Drawer>
      <Box component="main" sx={{ backgroundColor: '#281c4b', flexGrow: 1, pb: 0, mb: 0}}>
        <DrawerHeader />
        
      </Box>
    </Box>
  );
}