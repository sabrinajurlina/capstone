// need this for jobs :)
// import apiClientNoAuth from "./clientNoAuth";
import apiClientTokenAuth from "./clientTokenAuth";

const endpoint = '/job'

const get = async (token, cancelToken) =>{
    let error;
    let jobs;

    const response = await apiClientTokenAuth(token, cancelToken).get(endpoint)
    if (response.ok){
        jobs=response.data.jobs
    }else{
        error="An unexpected error has occurred. Please try again later."
    }
    return{
        error,
        jobs
    }
}

const getJob = async (id, cancelToken) =>{
    let error;
    let job;

    const response = await apiClientTokenAuth(cancelToken).getJob(endpoint+'/'+id);
    if (response.ok){
        job=response.data
    }else{
        error="An unexpected error has occurred. Please try again later."
    }
    return{
        error,
        job
    }
}

const postJob = async(token, data, cancelToken) => {
    let error;
    let job;

    const response = await apiClientTokenAuth(token, cancelToken).post(endpoint, data);
    if (response.ok){
        job = response.data
    }else if (response.status === 401){
        error="Your session has timed out. Please login again"
    }else{
        error = "An unexpected error has occurred. Please try again."
    }
    return{
        error,
        job
    }
};

const putJob = async(token, id, data, cancelToken) => {
    let error;
    let job;

    const response = await apiClientTokenAuth(token, cancelToken).put(endpoint+'/'+id, data);
    if (response.ok){
        job = response.data
    }else if (response.status === 401){
        error="Your session has timed out. Please login again"
    }else{
        error = "An unexpected error has occurred. Please try again."
    }
    return {
        error,
        job
    }
};

const delJob = async(token, id, cancelToken) => {

    const response = await apiClientTokenAuth(token, cancelToken).delete(endpoint+'/'+id);
    return response.ok
}

const apiJob={
    get,
    getJob,
    postJob,
    putJob,
    delJob
}

export default apiJob