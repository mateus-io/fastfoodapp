import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from "react-native";
import { View } from "../Themed";
import { CustomInput } from "../molecules/CustomInput";
import { useState } from "react";
import { CustomButton } from "../molecules/CustomButton";
import { storeRestaurant } from "../../services/storeRestaurant";

export function StoreRestaurantForm() {
    const [name, setName] = useState("")
    const [restaurantPhoto, setRestaurantPhoto] = useState("")
    const [rating, setRating] = useState("")
    const [averageCost, setAverageCost] = useState("")

    async function saveRestaurant(){
        const data = {
            averageCost: Number(averageCost),
            illustration: restaurantPhoto,
            name,
            rating: Number(rating)
        }

        try {
            const response = await storeRestaurant(data)
            Alert.alert('Sucesso!', JSON.stringify(response))
        } catch (error) {
            Alert.alert((error as Error).message)
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 30}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View
                    style={styles.form}
                >
                    <CustomInput
                        label="Nome"
                        onChangeValue={setName}
                        value={name}
                        placeholder="Pizzaria"
                    />

                    <CustomInput
                        label="Foto do Restaurante"
                        onChangeValue={setRestaurantPhoto}
                        value={restaurantPhoto}
                        placeholder="http://s3.com/foto.png"
                    />

                    <CustomInput
                        label="Nota"
                        onChangeValue={setRating}
                        value={rating}
                        placeholder="0 - 5"
                        keyboardType="numeric"
                    />

                    <CustomInput
                        label="Preço Médio"
                        onChangeValue={setAverageCost}
                        value={averageCost}
                        placeholder="20.00"
                        keyboardType="numeric"
                    />

                    <CustomButton
                        title="Cadastrar"
                        variant="primary"
                        style={{
                            marginTop: 30,
                        }}
                        onPress={saveRestaurant}
                    />

                </View>
                
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'column',
        flex: 1,
        padding: 20
    }
})