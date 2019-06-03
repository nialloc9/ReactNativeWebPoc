import * as React from "react";
import { Image as NativeImage, ImageProps } from "react-native";

export type ImageInterface = Pick<ImageProps, "style" | "source">

const Image = (props: ImageInterface) => <NativeImage {...props} />

export default Image