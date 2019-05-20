import * as React from "react";
import { View, Text, TextInput } from "../../Base"
import { TextInputInterface } from "../../Base/TextInput/TextInput"
import { TextInterface } from "../../Base/Text/Text"

interface InputI {
    isRequired?: boolean,
    label?: string,
    type?: "string" | "number",
    textInputOverride?: Partial<TextInputInterface>,
    labelOverride?: Partial<TextInterface>,
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
        backgroundColor: "white"
    }

    private onChange = (text: string) : void => {
        const { type, onChange } = this.props
        console.log(typeof text, text)
        if(onChange) {

            const response = type === "string" ? text : parseInt(text, 10);

            onChange(String(response))
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

    get label(): string {
        const { isRequired, label = "" } = this.props

        if(isRequired) return `${label}: *`

        return `${label}:`
    }

    public render () : React.ReactNode {
        return (
            <View style={{alignSelf: "stretch"}}>
                <Text {...this.labelOverride}>{this.label}</Text>
                <TextInput {...this.textInputOverride} onChangeText={this.onChange} />
            </View>
        )
    }
}

export default Input