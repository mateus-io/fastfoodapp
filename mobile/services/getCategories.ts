import { RemoteAPIs } from '../constants/RemoteAPIs'
import { CategoryFromAPIResponse } from '../models/Category'

export async function getCategories(): Promise<CategoryFromAPIResponse[]> {
    return new Promise((resolve, reject) => {
        const endpoint = '/food_categories'

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