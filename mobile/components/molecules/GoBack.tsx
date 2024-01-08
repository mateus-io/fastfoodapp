import { router } from 'expo-router'
import { Pressable, StyleSheet } from "react-native"
import { View } from '../Themed'
import { Feather } from '@expo/vector-icons'

export function GoBack() {
    return (
        <Pressable
            onPress={() => {
                if (router.canGoBack()) {
                    router.back()
                }
            }}
        >
            <View
                style={styles.backWrapper}
            >
                <Feather
                    name="chevron-left"
                    size={28}
                    color="#12142C"
                />
            </View>

        </Pressable>
    )
}

const styles = StyleSheet.create({
    backWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 10,
        paddingLeft: 20
    }
})