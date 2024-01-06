import { Text, TextProps } from 'react-native'

export function PrimaryText(props: TextProps) {
    return <Text {...props} style={[props.style, { fontFamily: 'Inter' }]} />
}