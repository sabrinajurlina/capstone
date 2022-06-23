import {useEffect, useContext} from 'react'
import {CancelToken} from 'apisauce'
import apiTokenAuth from '../api/apiTokenAuth';
import {AppContext} from '../context/AppContext'
import {useNavigate} from 'react-router-dom';

export default function useDeleteUser(){
    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (user?.token && user?.id){ //is this right?
                (async()=>{
                    response = await apiTokenAuth.delUser(user.token, user.id, source.token)
                    if (response){
                        setAlert({msg:`User has been deleted`, cat:'success'})
                    }else if(response === false && response !== undefined){
                        setAlert({msg:`Your session has timed out. Please login and try again`, cat:'warning'})
                        navigate('/') //need changed?
                    }
                })()
            }
            return ()=>{source.cancel()}
        },
        [user, user.token]
    )
}