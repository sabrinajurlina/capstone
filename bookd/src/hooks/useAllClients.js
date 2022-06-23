import {useEffect, useState, useContext} from 'react';
import {AppContext} from '../context/AppContext';
import apiClients from '../api/apiClients';
import {CancelToken} from 'apisauce';

export default function useAllClients(){ //do i need the null parameter?
    const [clients, setClients] = useState({})
    const {user} = useContext(AppContext)

    useEffect(
        ()=>{
            let source;
            (async()=>{
                source = CancelToken.source()
                const response = await apiClients.get(source.token)
                setClients(response)})()
            return ()=>{source.cancel()}
        },
        []
    )
    return clients
}