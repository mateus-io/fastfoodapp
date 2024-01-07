import { StyleSheet } from "react-native";
import { View } from "../Themed";
import { RestaurantCard } from "../molecules/RestaurantCard";

interface RestaurantListProps {}

export function RestaurantList(props: RestaurantListProps) {
    const mockRestaurants = [
        {
            averageCost: 2.5,
            name: "McDonalds",
            rating: 4.8,
            illustrationURI: "https://res.cloudinary.com/altos/image/upload/v1677697615/example-data/FoodOrderingApp/Restaurants/Mcdonalds.png",
            onPress: () => {}
        },
        {
            averageCost: 2.1,
            name: "Subway",
            rating: 4.7,
            illustrationURI: "https://res.cloudinary.com/altos/image/upload/v1677697615/example-data/FoodOrderingApp/Restaurants/Subway.png",
            onPress: () => {}
        },
    ]

    return (
        <View
            style={styles.restaurantListWrapper}
        >
            {
                mockRestaurants.map((item) => (
                    <RestaurantCard
                        averageCost={item.averageCost}
                        name={item.name}
                        rating={item.rating}
                        illustrationURI={item.illustrationURI}
                        onPress={item.onPress}
                        key={item.name}
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