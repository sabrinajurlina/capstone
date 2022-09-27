import {useEffect, useContext} from 'react'
import putUser from '../api/apiTokenAuth';
import { CancelToken } from 'apisauce';
import {AppContext} from '../context/AppContext'
import {useNavigate} from 'react-router-dom';

export default function useEditUser(editUser){//do we need user_id or anything else here?
    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()
    
    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (user?.token && editUser?.email){
                (async()=>{
                    response = await putUser(editUser, user.token, source.token) //what info are we awaiting exactly?
                    if (response){
                        setAlert({msg: `User profile updated successfully`, cat:'success'})
                        console.log('profile updated successfully')
                    }else if(response === false && response !== undefined){
                        setAlert({msg: `Please reauthorize your account`, cat:'warning'})
                        navigate('/')
                    }    
                })()
            }
            return () =>{source.cancel()}
        },
        [user.token, editUser]
    )
}