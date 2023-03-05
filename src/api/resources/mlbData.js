import { APISettings } from '../config.js';

export default {
    
    index(latterURL) {
        return fetch( APISettings.baseURL + latterURL, {
            method: 'GET',
            headers: APISettings.headers
        } )
        .then( function( response ){
            if( response.status != 200 ){
                throw response.status;
            }else{
                return response.json();
            }
        });
    },
}