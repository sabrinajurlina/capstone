import apiClientNoAuth from "./clientNoAuth";
import apiClientTokenAuth from "./clientTokenAuth";

const endpoint = '/models'

const getModels = async (cancelToken) =>{
    let error;
    let models;

    const response = await apiClientTokenAuth(cancelToken).get(endpoint)
    if (response.ok){
        models=response.data.models
    }else{
        error="An unexpected error has occurred. Please try again later."
    }
    return{
        error,
        models
    }
}

const getModel = async (id, cancelToken) =>{
    let error;
    let model;

    const response = await apiClientTokenAuth(cancelToken).getModel(endpoint+'/'+id);
    if (response.ok){
        model=response.data
    }else{
        error="An unexpected error has occurred. Please try again later."
    }
    return{
        error,
        model
    }
}

const apiModels={
    getModels,
    getModel,
}
export default apiModels