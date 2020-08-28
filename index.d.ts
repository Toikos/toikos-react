import * as React from 'react'
import { GestureResponderEvent } from 'react-native'

//TButton
export type TButtonParams = {
    onPress: (e: GestureResponderEvent) => void,
    text?: string,
    buttonStyle?: {},
    buttonTextStyle?: {}
}
export function TButton(props: TButtonParams): React.FC<TButtonParams>;
declare module 'toikos-react'