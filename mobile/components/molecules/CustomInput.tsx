import { KeyboardTypeOptions, StyleSheet, TextInput } from "react-native"
import { View } from "../Themed"
import { PrimaryText } from "../atoms/PrimaryText"

interface CustomInputProps {
    label: string
    placeholder: string
    value: string
    onChangeValue: (value: string) => void
    keyboardType?: KeyboardTypeOptions
}

export function CustomInput(props: CustomInputProps) {
    const { label, onChangeValue, placeholder, value, keyboardType } = props
    return (
        <View
            style={styles.fieldWrapper}
        >
            <PrimaryText
                style={styles.label}
            >
                {label}
            </PrimaryText>
            <TextInput
                style={styles.input}
                onChangeText={onChangeValue}
                value={value}
                placeholder={placeholder}
                placeholderTextColor="#A5ADB7"
                keyboardType={keyboardType}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    fieldWrapper: {
        flexDirection: 'column',
        marginTop: 20,
    },
    label: {
        color: '#12142C',
        fontSize: 14,
        fontWeight: '400',
        opacity: .7,
    },
    input: {
        height: 48,
        marginTop: 10,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#EAEDF2',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '400',
    }
})