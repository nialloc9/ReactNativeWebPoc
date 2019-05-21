import * as React from "react";
import { TextInput as NativeInput, ViewProps } from "react-native";
import Styled from "styled-components"
import { mergeStyle } from "../../../utils/style"

export type ViewInterface = Pick<ViewProps, "style">

type T = { children: string | undefined | React.ReactNode }

interface Styles {
    backgroundColor: string | boolean;
}

const StyledInput : any = Styled(
    ({
        backgroundColor,
        ...rest
    }) => <NativeInput {...rest} />
)`
    ${({ backgroundColor = false } : Styles) => backgroundColor && `background-color: ${backgroundColor}`}
`

const Text = (props : ViewInterface & T) : React.ReactNode => {
    const { style, ...rest } = props

    return <StyledInput {...mergeStyle(style)} {...rest} />
}

export default Text