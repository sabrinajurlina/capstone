import {useEffect, useContext} from 'react'
import {CancelToken} from 'apisauce'
import apiJob from '../api/apiJob';
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

export default function useCreateJob(job) {
    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (job){
                (async()=>{
                    response = await apiJob.postJob(user.token, job, source.token)
                    if (response){
                        setAlert({'msg':`Your job post was created successfully`, cat:'success'})
                        
                    }else if(response === false && response !== undefined){
                        setAlert({'msg':`Please reauthorize you account`, cat:'warning'})
                        navigate('/clientLogin')
                    }
                })()
            }
            return ()=>{source.cancel()}
        },
        [job, user.token]
    )
}