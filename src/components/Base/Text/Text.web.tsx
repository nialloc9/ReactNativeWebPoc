import * as React from "react";
import { Text as NativeText, ViewProps } from "react-native";
import { Block } from "../../Web/Styled"
import { mergeStyle } from "../../../utils/style"

export type ViewInterface = Pick<ViewProps, "style">

type T = { children: string | undefined | React.ReactNode }

const Text = (props : ViewInterface & T) : React.ReactNode => {
    const { style, ...rest } = props

    return <Block {...mergeStyle(style)}><NativeText {...rest} /></Block>
}

export default Text