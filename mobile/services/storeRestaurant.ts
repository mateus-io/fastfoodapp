import { RemoteAPIs } from "../constants/RemoteAPIs";
import { RestaurantDTO } from "../models/Restaurant";

export async function storeRestaurant(restaurant: RestaurantDTO): Promise<any> {
    return new Promise((resolve, reject) => {
        const endpoint = '/api/fastfoodapp/restaurants'

        fetch(RemoteAPIs.mockAPI.baseURL + endpoint, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(restaurant)
        })
            .then(response => response.json())
            .then(json => {
                resolve(json)
            })
            .catch((error) => {
                reject(error)
            })
    })
}