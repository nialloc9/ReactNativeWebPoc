import Styled from "styled-components"
import { remCalc } from "../../../utils/style"

interface Styles {
    backgroundColor?: string | boolean;
    alignSelf?: string | boolean;
    padding?: number | boolean;
    color?: string | boolean;
}

const Block : any = Styled("div")`
    ${({ backgroundColor = false } : Styles) => backgroundColor && `background-color: ${backgroundColor};`}
    ${({ alignSelf = false } : Styles) => alignSelf && `align-self: ${alignSelf};`}
    ${({ padding = false } : Styles) => padding && `padding: ${remCalc(padding)};`}
    ${({ color = false } : Styles) => color && `color: ${color};`}
`;

export default Block