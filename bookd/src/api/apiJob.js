// need this for jobs :)
import apiClientNoAuth from "./clientNoAuth";
import apiClientTokenAuth from "./clientTokenAuth";

const endpoint = '/job'

const get = async (cancelToken) =>{
    let error;
    let jobs;

    const response = await apiClientNoAuth(cancelToken).get(endpoint)
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

const apiJob={
    get,
    getJob,
}
export default apiJob