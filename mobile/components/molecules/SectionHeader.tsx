import { StyleSheet, Pressable } from "react-native"
import { View } from "../Themed"
import { PrimaryText } from "../atoms/PrimaryText"


interface SectionHeaderProps {
    title: string,
    actionLabel: string,
    action: () => void
}

export function SectionHeader(props: SectionHeaderProps) {
    const { title, actionLabel, action } = props
    return (
        <View
            style={styles.sectionHeaderContent}
        >
            <PrimaryText
                style={styles.sectionHeaderTitle}
            >
                {title}
            </PrimaryText>

            <Pressable
                onPress={action}
            >
                <PrimaryText
                    style={styles.sectionHeaderActionLabel}
                >
                    {actionLabel}
                </PrimaryText>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    sectionHeaderContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        paddingBottom: 0
    },
    sectionHeaderTitle: {
        color: '#12142C',
        fontWeight: '500',
        fontSize: 18
    },
    sectionHeaderActionLabel: {
        color: '#A5ADB7',
        fontWeight: '400',
        fontSize: 14,
    }
})