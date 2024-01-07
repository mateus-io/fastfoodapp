import { Pressable, StyleSheet, Image } from "react-native"
import { View } from "../Themed"
import { PrimaryText } from "../atoms/PrimaryText"
import { AntDesign } from '@expo/vector-icons'

interface RestaurantCardProps {
    illustrationURI: string
    name: string
    averageCost: number
    rating: number
    onPress: () => void
}

export function RestaurantCard(props: RestaurantCardProps) {
    const { averageCost, illustrationURI, name, onPress, rating } = props
    return (
        <Pressable
            onPress={onPress}
            style={styles.restaurantCardWrapper}
        >
            <Image
                resizeMode="cover"
                source={{
                    uri: illustrationURI
                }}
                style={styles.restaurantIllustration}
            />

            <View
                style={styles.restaurantResume}
            >
                <PrimaryText
                    style={styles.restaurantName}
                >
                    {name}
                </PrimaryText>

                <View
                    style={styles.restaurantRating}
                >
                    <AntDesign
                        style={styles.starIcon}
                        name="star"
                        color="#12142C"
                        size={14}
                    />

                    <PrimaryText
                        style={styles.restaurantRatingValue}
                    >
                        {rating}
                    </PrimaryText>
                </View>
            </View>

            <View
                style={styles.averageCostBadgeWrapper}
            >
                <View
                    style={styles.averageCostBadge}
                >
                    <PrimaryText
                        style={styles.restaurantAverageCost}
                    >
                        {`$${averageCost}0`}
                    </PrimaryText>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    restaurantCardWrapper: {
        marginTop: 16,
        paddingHorizontal: 4,
        width: '48%',
    },
    restaurantIllustration: {
        height: 120,
        width: '100%',
        borderRadius: 8
    },
    restaurantResume: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    restaurantName: {
        color: '#12142C',
        fontSize: 14,
        fontWeight: '500'
    },
    restaurantRating: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    starIcon: {
        marginRight: 5,
    },
    restaurantRatingValue: {
        color: '#12142C',
        fontSize: 14,
        fontWeight: '500',
    },
    averageCostBadgeWrapper: {
        flexDirection: 'row',
    },
    averageCostBadge: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF3D71',
        marginTop: 6,
        paddingVertical: 3,
        paddingHorizontal: 7,
        borderRadius: 10,
    },
    restaurantAverageCost: {
        color: 'white',
        fontWeight: '400',
        fontSize: 12,
    }
})