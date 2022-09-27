import {useEffect, useState} from 'react';
import {CancelToken} from 'apisauce';
import {postUser} from '../api/apiNoAuth';
import {useNavigate} from 'react-router-dom';

export default function useCreateUser(user) {
    const [error, setError] = useState('')
    const navigate = useNavigate()

    // ##    Responses:
    // ##    200 : Everything went well
    // ##    401 : Invalid Token, or invalid Username/Password,
    // ##    403 : User not authorized for action
    // ##    404 : Resource not found
    // ##    500 : Server Side Error

    useEffect(
        ()=>{
            const source = CancelToken.source()
            if (user.email){
                const register = async(cancelToken)=>{
                    const response = await postUser(user, source.token)
                    if (response){
                        console.log('User was created successfully');
                        if (user.role === 'Model' || user.role === 'model' || user.role === 'MODEL'){
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