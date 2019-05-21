import * as React from "react";
import { View as NativeView, ViewProps } from "react-native";
import { Block } from "../../Web/Styled"
import { mergeStyle } from "../../../utils/style"

export type ViewInterface = Pick<ViewProps, "style">

type T = { children: string | undefined | React.ReactNode }

const View = (props : ViewInterface & T) : React.ReactNode => {
    const { style, ...rest } = props

    return <Block {...mergeStyle(style)}><NativeView {...rest} /></Block>
}

export default View