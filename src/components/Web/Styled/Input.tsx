import Styled from "styled-components"
import { TextInput as NativeTextInput } from "react-native"

interface Styles {
    backgroundColor?: string | boolean;
}

const  Input: any = Styled(NativeTextInput)`
    ${({ backgroundColor = false } : Styles) => backgroundColor && `background-color: ${backgroundColor};`}
`;

export default Input