import * as React from "react";
import { TextInput as NativeInput, TextInputProps } from "react-native";

export type TextInputInterface = Pick<TextInputProps, "onChangeText" | "style">

class TextInput extends React.Component<TextInputInterface> {
  public render() {
    return <NativeInput {...this.props} />
  }
}

export default TextInput