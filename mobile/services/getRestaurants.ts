import { RemoteAPIs } from '../constants/RemoteAPIs'
import { RestaurantFromAPIResponse } from '../models/Restaurant'

export async function getRestaurants(): Promise<RestaurantFromAPIResponse[]> {
    return new Promise((resolve, reject) => {
        const endpoint = '/stores'

        fetch(RemoteAPIs.apiCore.baseURL + endpoint)
            .then(response => response.json())
            .then(json => {
                resolve(json)
            })
            .catch(error => {
                reject(error)
            })

    })
}