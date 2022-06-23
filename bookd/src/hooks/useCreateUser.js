import {useEffect, useState} from 'react';
import {CancelToken} from 'apisauce';
import {postUser} from '../api/apiNoAuth';
import {useNavigate} from 'react-router-dom';

export default function useCreateUser(user) {
    const [error, setError] = useState('')
    const navigate = useNavigate()


    useEffect(
        ()=>{
            const source = CancelToken.source()
            if (user.email){
                const register = async(cancelToken)=>{
                    const response = await postUser(user, source.token)
                    if (response){
                        console.log('User was created successfully');
                        if (user.role === 'model'){
                            navigate('/modelLogin')
                        }else{
                            navigate('/clientLogin')
                        }
                    }
                    setError(response.error);
                }
                register(source.token)
                               
            }
            return ()=>{source.cancel()} 
        },
        [user]
    )
}