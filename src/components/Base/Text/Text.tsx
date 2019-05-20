import * as React from "react";
import { Text as NativeText, TextProps } from "react-native";

export type TextInterface = Pick<TextProps, "style">

type T = { children: string | undefined }

const Text = (props: TextInterface & T) => <NativeText {...props} />

export default Text