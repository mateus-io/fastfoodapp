import { TouchableOpacity, StyleSheet } from 'react-native'

import { PrimaryText } from "../atoms/PrimaryText"

type CustomProps = {
    variant: 'primary' | 'secondary'
    title: string
}

type CustomButtonProps = CustomProps & TouchableOpacity['props']

export function CustomButton(props: CustomButtonProps) {
    const { variant, title, style, ...otherProps } = props
    const styles = variants[variant]
    return (
        <TouchableOpacity
            {...otherProps}
            style={[styles.button, style]}
        >
            <PrimaryText
                style={styles.text}
            >
                {title}
            </PrimaryText>
        </TouchableOpacity>
    )
}

const variants = {
    primary: StyleSheet.create({
        button: {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            height: 48,
            marginTop: 25,
            backgroundColor: '#5DB329',
            elevation: 3
        },
        text: {
            fontWeight: '500',
            textAlign: 'center',
            fontSize: 16,
            color: 'white'
        }
    }),
    secondary: StyleSheet.create({
        button: {
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            height: 48,
            marginTop: 10,
            backgroundColor: 'white',
            elevation: 3,
            borderWidth: 1.5,
            borderColor: '#5DB329'
        },
        text: {
            fontWeight: '500',
            textAlign: 'center',
            fontSize: 16,
            color: '#5DB329',
        }
    }),
}