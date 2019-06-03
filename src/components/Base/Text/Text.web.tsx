import * as React from "react";
import { Text as NativeText, ViewProps } from "react-native";
import { Block } from "../../Web/Styled"
import { mergeStyle } from "../../../utils/style"



export type ViewInterface = Pick<ViewProps, "style">

type T = { children: string | undefined | React.ReactNode }

const Text = (props : ViewInterface & T) : React.ReactNode => {
    const { style, ...rest } = props

    // NativeText needs to inherit from above
    return <Block {...mergeStyle(style)}><NativeText {...rest} style={{ color: "inherit" }} /></Block>
}

export default Text