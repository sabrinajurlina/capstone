import {useEffect, useContext} from 'react'
import apiTokenAuth from '../api/apiTokenAuth';
import { CancelToken } from 'apisauce';
import {AppContext} from '../context/AppContext'
import {useNavigate} from 'react-router-dom';

export default function useEditUser(){//do we need user_id or anything else here?
    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()
    

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (user?.token){
                (async()=>{
                    response = await apiTokenAuth.putUser(user.token, source.token) //what info are we awaiting exactly?
                    if (response){
                        setAlert({msg: `User profile updated successfully`, cat:'success'})
                    }else if(response === false && response !== undefined){
                        setAlert({msg: `Please reauthorize your account`, cat:'warning'})
                        navigate('/login')
                    }    
                })()
            }
            return () =>{source.cancel()}
        },
        [user.token]
    )
}