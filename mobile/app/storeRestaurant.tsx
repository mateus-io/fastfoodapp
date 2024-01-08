import { Platform, StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { GoBack } from "../components/molecules/GoBack";
import { PrimaryText } from "../components/atoms/PrimaryText";
import { StatusBar } from "expo-status-bar";
import { StoreRestaurantForm } from "../components/organisms/StoreRestaurantForm";

export default function storeRestaurant() {
    return (
        <>
            <GoBack />
            <View
                style={styles.screenHeading}
            >
                <PrimaryText
                    style={styles.heading}
                >
                    Cadastrar Restaurante
                </PrimaryText>
            </View>

            <StoreRestaurantForm />

            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'dark'} />
        </>
    )
}

const styles = StyleSheet.create({
    screenHeading: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10
    },
    heading: {
        color: "#12142C",
        fontWeight: '600',
        fontSize: 21,
    }
})