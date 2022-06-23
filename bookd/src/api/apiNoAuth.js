import apiClientNoAuth from './clientNoAuth';

const endpoint = '/user';

export const postUser = async (data, cancelToken) => {
    let error;
    let user;

    const response = await apiClientNoAuth(cancelToken).post(endpoint, data);
    if (response.ok){
        user = response.data
    }else if (response.status === 422){
        error = "This email address is already in use. Please use another email"
    }else{
        error = "An unexpected error has ocurred. Please try again."
    }
    return {
        error,
        user
    }
};