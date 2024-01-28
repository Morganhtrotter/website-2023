import { APISettings } from '../config.js';

// Custom API for statsapi.mlb.com
export default {
    
    index(latterURL) {
        return fetch( APISettings.baseURL + latterURL, {
            method: 'GET',
            headers: APISettings.headers,
        } )
        .then( function( response ){
            if( response.status != 200 ){
                throw response.status;
            }else{
                return response.json();
            }
        });
    },
    player_stats(playerId, year, group) {
        return fetch( APISettings.baseURL + '/api/v1/people?personIds=' + playerId + '&hydrate=stats(group=[' + group + '],type=[season],season=' + year + ')', {
            method: 'GET',
            headers: APISettings.headers,
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