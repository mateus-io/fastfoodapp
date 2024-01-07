import { useEffect, useState } from "react"
import { Alert, StyleSheet } from "react-native"
import { View } from "../Themed"
import { RestaurantCard } from "../molecules/RestaurantCard"
import { Restaurant } from "../../models/Restaurant"
import { getRestaurants } from "../../services/getRestaurants"

interface RestaurantListProps {}

export function RestaurantList(props: RestaurantListProps) {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])

    async function didMount() {
        try {
            const getRestaurantsResponse = await getRestaurants()

            const restaurantsResponse = getRestaurantsResponse.map((restaurant) => ({
                id: restaurant.id,
                name: restaurant.name,
                illustration: restaurant.url,
                rating: restaurant.Rating,
                averageCost: restaurant['Avg Cost']
            }))

            setRestaurants(restaurantsResponse)
        } catch (error) {
            Alert.alert((error as Error).message)
        }
    }

    useEffect(() => {
        didMount()
    }, [])

    return (
        <View
            style={styles.restaurantListWrapper}
        >
            {
                restaurants.map((item) => (
                    <RestaurantCard
                        averageCost={item.averageCost}
                        name={item.name}
                        rating={item.rating}
                        illustrationURI={item.illustration}
                        onPress={() => {
                            Alert.alert('Indo para o restaurante: ', item.name)
                        }}
                        key={`${item.id}-${item.name}`}
                    />
                ))
            }

        </View>
    )
}

const styles = StyleSheet.create({
    restaurantListWrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }
})