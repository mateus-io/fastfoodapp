export type Restaurant = {
    id: number
    name: string
    illustration: string
    rating: number
    averageCost: number
}

export type RestaurantDTO = {
    name: string
    illustration: string
    rating: number
    averageCost: number
}

export type RestaurantFromAPIResponse = {
    id: number
    name: string
    Rating: number
    "Avg Cost": number
    url: string
}