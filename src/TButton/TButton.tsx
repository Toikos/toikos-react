import * as React from 'react'
import { StyleSheet, TouchableOpacity, GestureResponderEvent, Text } from 'react-native';


export type TButtonParams = {
    onPress: (e: GestureResponderEvent) => void,
    text?: string,
    buttonStyle?: {},
    buttonTextStyle?: {}
}

const TButton: React.FC<TButtonParams> = (props) => {

    if(props.children)
    {
        return (
            <TouchableOpacity onPress={props.onPress}>
                {props.children}
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity onPress={(e) => {e.preventDefault(); props.onPress(e);}} style={[styles.buttonDefault, props.buttonStyle]}>
                <Text style={[styles.textDefault, props.buttonTextStyle]}>{props.text}</Text>
            </TouchableOpacity>
        );
    }
}
export default TButton;

const styles = StyleSheet.create({
    buttonDefault: {
        // backgroundColor: PRIMARY_COLOR,
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 4,
    },
    textDefault: {
        // color: WHITE_COLOR
    }
});
