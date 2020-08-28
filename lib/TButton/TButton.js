"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_native_1 = require("react-native");
var TButton = function (props) {
    if (props.children) {
        return (React.createElement(react_native_1.TouchableOpacity, { onPress: props.onPress }, props.children));
    }
    else {
        return (React.createElement(react_native_1.TouchableOpacity, { onPress: function (e) { e.preventDefault(); props.onPress(e); }, style: [styles.buttonDefault, props.buttonStyle] },
            React.createElement(react_native_1.Text, { style: [styles.textDefault, props.buttonTextStyle] }, props.text)));
    }
};
exports.default = TButton;
var styles = react_native_1.StyleSheet.create({
    buttonDefault: {
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 4,
    },
    textDefault: {}
});
//# sourceMappingURL=TButton.js.map