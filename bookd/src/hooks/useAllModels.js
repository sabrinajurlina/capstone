import {useEffect, useState} from 'react';
import apiModels from '../api/apiModels';
import {CancelToken} from 'apisauce';

export default function useAllModels(){ //do i need the null parameter?
    const [models, setModels] = useState({})

    useEffect(
        ()=>{
            let source;
            (async()=>{
                source = CancelToken.source()
                const response = await apiModels.getModels(source.token)
                setModels(response)})()
            return ()=>{source.cancel()}
        },
        []
    )
    return models
}