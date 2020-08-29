import React from 'react';
import { GestureResponderEvent, NativeMethodsMixin } from 'react-native';

type Constructor<T> = new (...args: any[]) => T;

declare module 'react-toikos' {
    export type TButtonParams = {
        onPress: (e: GestureResponderEvent) => void,
        text?: string,
        buttonStyle?: {},
        buttonTextStyle?: {}
    }

    const TButton: React.FunctionComponent<TButtonParams>;
    const TButtonBase: Constructor<NativeMethodsMixin> & typeof TButton;
    export default TButton;
}