import {useEffect, useState} from 'react';
import apiJob from '../api/apiJob';
import {CancelToken} from 'apisauce';

export default function useAllJobs(){ //do i need the null parameter?
    const [jobs, setJobs] = useState({})

    useEffect(
        ()=>{
            let source;
            (async()=>{
                source = CancelToken.source()
                const response = await apiJob.get(source.token)
                setJobs(response)})()
            return ()=>{source.cancel()}
        },
        []
    )
    return jobs
}