import {useEffect, useContext} from 'react'
import {CancelToken} from 'apisauce'
import apiJob from '../api/apiJob'
import { AppContext } from '../context/AppContext'
import {useNavigate} from 'react-router-dom';

export default function useDeleteJob(job) {
    const {user, setAlert} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(
        ()=>{
            let response
            const source = CancelToken.source()
            if (job?.id){
                (async()=>{
                    response = await apiJob.delJob(user.token, job.id, source.token)
                    if (response){
                        setAlert({msg:`Job: ${job.id} has been deleted`,cat:'success'})
                    }else if(response === false && response !== undefined){
                        setAlert({msg:`Please reauthorize you account`,cat:'warning'})
                        navigate('/clientHome')
                    }
                })()
            }
            return ()=>{source.cancel()}
        },
        [job, user.token]
    )
}