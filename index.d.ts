// Type definitions for @react-native-community/toolbar-android
// Type definitions based off what was originally implemented in @types/react-native

import React from 'react';
import { GestureResponderEvent } from 'react-native';

type Constructor<T> = new (...args: any[]) => T;

declare module 'react-toikos' {
    export type TButtonParams = {
        onPress: (e: GestureResponderEvent) => void,
        text?: string,
        buttonStyle?: {},
        buttonTextStyle?: {}
    }

    const TButton: React.FunctionComponent<TButtonParams>;
    export default TButton;
}