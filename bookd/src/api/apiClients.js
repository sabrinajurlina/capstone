import apiClientTokenAuth from "./clientTokenAuth";
// import apiClientNoAuth from './clientNoAuth';

const endpoint = '/clients'

const get = async (cancelToken) =>{
    let error;
    let clients;

    const response = await apiClientTokenAuth(cancelToken).get(endpoint)
    if (response.ok){
        clients=response.data.clients
    }else{
        error="An unexpected error has occurred. Please try again later."
    }
    return{
        error,
        clients
    }
}

// const getClient = async (id, cancelToken) =>{
//     let error;
//     let client;

//     const response = await apiClientTokenAuth(cancelToken).getClient(endpoint+'/'+id);
//     if (response.ok){
//         client=response.data
//     }else{
//         error="An unexpected error has occurred. Please try again later."
//     }
//     return{
//         error,
//         client
//     }
// }

const apiClients={
    get
    // getClient,
}
export default apiClients