import * as React from "react";
import { ImageProps } from "react-native";
import { Image as StyledImage } from "../../Web/Styled"
import { mergeStyle } from "../../../utils/style"

export type ImageInterface = Pick<ImageProps, "style" | "source">

const Image = (props : ImageInterface) : React.ReactNode => {
    const { style, ...rest } = props

    return <StyledImage {...rest} {...mergeStyle(style)} />
}

export default Image