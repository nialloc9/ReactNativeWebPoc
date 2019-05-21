import * as React from "react";
import { View, Text, TextInput } from "../../Base"
import { TextInputInterface } from "../../Base/TextInput/TextInput"
import { TextInterface } from "../../Base/Text/Text"
import { ViewInterface } from "../../Base/View/View"

interface InputI {
    isRequired?: boolean,
    label?: string,
    type?: "string" | "number",
    textInputOverride?: Partial<TextInputInterface>,
    labelOverride?: Partial<TextInterface>,
    containerOverride?: Partial<ViewInterface>,
    onChange?: (value: string | number) => void
}

class Input extends React.Component<InputI> {

    static defaultProps = {
        type: "string",
        borderColor: 'gray', 
        borderWidth: 1,
    }

    static labelDefaultStyle = {}

    static textInputDefaultStyle = {
        backgroundColor: "white",
    }

    static containerDefaultStyle = {
        alignSelf: "stretch",
        backgroundColor: "transparent"
    }

    private onChange = (text: string) : void => {
        const { type, onChange } = this.props
       
        if(onChange) {

            const response = type === "string" ? text : parseInt(text, 10);

            onChange(response)
        }
        
    }

    get labelOverride() : Partial<TextInterface> {

        const { labelOverride } = this.props

        if(!labelOverride) return { style: Input.labelDefaultStyle }

        const { style } = labelOverride
        
        return {
            ...labelOverride,
            style: Object.assign(Input.labelDefaultStyle, style)
        }
    }

    get textInputOverride() : Partial<TextInputInterface> {

        const { textInputOverride } = this.props

        if(!textInputOverride) return { style: Input.textInputDefaultStyle }

        const { style } = textInputOverride
        
        return {
            ...textInputOverride,
            style: Object.assign(Input.textInputDefaultStyle, style)
        }
    }

    get containerOverride() : Partial<ViewInterface> | {} {

        const { containerOverride } = this.props

        if(!containerOverride) return { style: Input.containerDefaultStyle }

        const { style } = containerOverride
        
        return {
            ...containerOverride,
            style: Object.assign(Input.containerDefaultStyle, style)
        }
    }

    get label(): string {
        const { isRequired, label = "" } = this.props

        if(isRequired) return `${label}: *`

        return `${label}:`
    }

    public render () : React.ReactNode {
        return (
            <View {...this.containerOverride}>
                <Text {...this.labelOverride}>{this.label}</Text>
                <TextInput {...this.textInputOverride} onChangeText={this.onChange} />
            </View>
        )
    }
}

export default Input