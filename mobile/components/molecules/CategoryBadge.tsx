import { Pressable, StyleSheet, Image } from "react-native"
import { View } from "../Themed"
import { PrimaryText } from "../atoms/PrimaryText"

interface CategoryBadgeProps {
    illustrationURI: string
    label: string
    onPress: () => void
}

export function CategoryBadge(props: CategoryBadgeProps) {
    const { illustrationURI, label, onPress } = props

    return (
        <Pressable
            onPress={onPress}
        >
            <View
                style={styles.categoryBadgeContent}
            >
                <Image
                    resizeMode="cover"
                    source={{
                        uri: illustrationURI
                    }}
                    style={styles.categoryBadgeIllustration}
                />

                <PrimaryText
                    style={styles.categoryBadgeLabel}
                >
                    {label}
                </PrimaryText>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    categoryBadgeContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        marginTop: 12,
        marginLeft: 6,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#A5ADB7',
    },
    categoryBadgeIllustration: {
        width: 32,
        height: 32,
    },
    categoryBadgeLabel: {
        fontWeight: '500',
        fontSize: 14,
        color: '#12142C',
        marginLeft: 4
    }
})