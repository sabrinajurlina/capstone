import {useEffect, useContext} from 'react'
import {CancelToken} from 'apisauce'
import apiTokenAuth from '../api/apiTokenAuth';
import {AppContext} from '../context/AppContext'
import {useNavigate} from 'react-router-dom';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

export default function useDeleteUser(){
    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (user?.token){
                (async()=>{
                    response = await apiTokenAuth.delUser(user.token, source.token)
                    if (response){
                        setAlert({msg:`User has been deleted`, cat:'success'})
                        console.log('success')
                        navigate('/')
                    }else if(response === false && response !== undefined){
                        setAlert({msg:`Your session has timed out. Please login and try again`, cat:'warning'})
                        console.log('please log back in and try again')
                        navigate('/') //need changed?
                    }
                })()
            }
            return ()=>{source.cancel()}
        },
        [user, user.token]
    )
}