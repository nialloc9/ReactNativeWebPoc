import * as React from "react";
import { ViewProps } from "react-native";
import { Input as StyledInput } from "../../Web/Styled"
import { mergeStyle } from "../../../utils/style"

export type ViewInterface = Pick<ViewProps, "style">

type T = { children: string | undefined | React.ReactNode }

const Text = (props : ViewInterface & T) : React.ReactNode => {
    const { style, ...rest } = props

    return <StyledInput {...mergeStyle(style)} {...rest} />
}

export default Text