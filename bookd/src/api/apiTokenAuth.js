import apiClientTokenAuth from "./clientTokenAuth";

const endpoint = '/user';

const putUser = async(token, cancelToken) => {
    let error;
    let user;

    const response = await apiClientTokenAuth(token, cancelToken).put(endpoint);
    if (response.ok){
        user = response.data
    }else if (response.status === 401){
        error="Your session has timed out. Please login again"
    }else{
        error = "An unexpected error has occurred. Please try again."
    }
    return {
        error,
        user
    }
};

const delUser = async(token, cancelToken) => {
    let error;
    let user;

    const response = await apiClientTokenAuth(token, cancelToken).delete(endpoint); //does this need to be .get?
    if (response.ok){
        user = response.data
    }else if (response.status === 401){
        error = "Your session has timed out. Please login again"
    }else{
        error = "An unexpected error has occurred. Please try again."
    }
    return {
        error,
        user
    }
}

export default {
    putUser,
    delUser
}