import { Platform, Text, StyleSheet, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'

import Images from '../constants/Images'

import { View } from '../components/Themed'
import { CustomButton } from '../components/molecules/CustomButton'

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


            <View
                style={styles.actionsView}
            >
                <CustomButton
                    variant="secondary"
                    title="Home"
                    onPress={() => {
                        router.replace('/home')
                    }}
                />

                <CustomButton
                    variant="primary"
                    title="Sign Up"
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
    },
    actionsView: {
        padding: 20,
        flexDirection: 'column'
    }
})