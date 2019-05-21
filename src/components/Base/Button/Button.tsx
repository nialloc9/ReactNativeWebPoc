import React from "react";
import { TouchableHighlight, View } from "react-native";
import {Text} from "../"
import { defaultStyle } from "./Button.style"
import { mergeStyle } from "../../../utils/style"

interface Props {
    text: string,
    accessibilityComponentType?: string,
    accessibilityLabel?: string,
    accessibilityRole?: string,
    accessibilityTraits?: string,
    underlayColor?: string | undefined
    activeOpacity?: number,
    fontSize?: number,
    lineHeight?: number,
    style?: {
        button?: any | any[],
        text?: any | any[]
    },
    onPress?: (event: any) => any,
}

class Button extends React.Component <Props, {}> {
    
    static defaultProps = {
        accessibilityComponentType: "button",
        accessibilityRole: "button",
        accessibilityTraits: "button",
        underlayColor: undefined,
        activeOpacity: 1,
        style: {}
    }

    get text() {
        const { text } = this.props

        return text.charAt(0).toUpperCase() + text.slice(1)
    }

    get touchableHighlightProps() : any {
        const {  
            accessibilityComponentType,
            accessibilityRole,
            accessibilityTraits,
            activeOpacity,
            underlayColor,
            onPress,
            style
        } = this.props

        const result = {
            accessibilityComponentType,
            accessibilityLabel: this.text,
            accessibilityRole,
            accessibilityTraits,
            activeOpacity,
            underlayColor,
            style: defaultStyle.button,
            onPress,
        }
        
        if(style && style["button"]) result.style = mergeStyle([result.style, style.button])

        return result
    }

    get textProps() {
        const {  
            style
        } = this.props

        const result = {
            title: this.text,
            style: defaultStyle.text
        }
        
        if(style && style.text) result.style = mergeStyle([result.style, style.text])

        return result
    }

    /**
     * NOTE: View is needed around text due to https://github.com/facebook/react-native/issues/1040
     */
    public render() : React.ReactNode{
        return (
            <TouchableHighlight {...this.touchableHighlightProps}>
                <View>
                    <Text
                        numberOfLines={1}
                        {...this.textProps}
                    >
                        {this.text}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}

export default Button;
