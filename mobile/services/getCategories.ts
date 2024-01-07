import { CategoryFromAPIResponse } from '../models/Category'

export async function getCategories(): Promise<CategoryFromAPIResponse[]> {
    return new Promise((resolve, reject) => {
        const categoriesMock = [
            {
                url: 'https://res.cloudinary.com/altos/image/upload/v1677696732/example-data/FoodOrderingApp/Categories/Vegan.png',
                name: 'Vegan',
                id: 1,
            },
            {
                url: 'https://res.cloudinary.com/altos/image/upload/v1677696732/example-data/FoodOrderingApp/Categories/Meat.png',
                name: 'Meat',
                id: 2,
            },
        ]
        resolve(categoriesMock)
    })
}