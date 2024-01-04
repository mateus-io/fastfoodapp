import { Platform, Text, StyleSheet, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import Images from '../constants/Images'

import { View } from '../components/Themed'

export default function IndexScreen() {
    return (
        <>
            <View
                style={styles.contentView}
            >
                <Image
                    resizeMode='cover'
                    source={Images.WelcomeIllustration}
                    style={styles.welcomeIllustration}
                />
            </View>

            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'dark'} />
        </>
    )
}

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    welcomeIllustration: {
        width: 327,
        height: 500
    }
})