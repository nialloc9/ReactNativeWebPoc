import Styled from "styled-components"
import { remCalc } from "../../../utils/style"

interface Styles {
    backgroundColor?: string | boolean;
    alignSelf?: string | boolean;
    padding?: string | number | boolean;
    alignItems?: string | boolean;
    justifyContent?: string | boolean;
    height?: string | number | boolean;
    width?: string | number | boolean;
    minWidth?: string | number | boolean;
    color?: string | boolean;
    borderRadius?: string | boolean;
    lineHeight?: string | boolean;
    verticalAlign?: string | boolean;
    textAlign?: string | boolean;
}

const Block : any = Styled("a")`
    ${({ backgroundColor = false } : Styles) => backgroundColor && `background-color: ${backgroundColor};`}
    ${({ alignSelf = false } : Styles) => alignSelf && `align-self: ${alignSelf};`}
    ${({ alignItems = false } : Styles) => alignItems && `align-items: ${alignItems};`}
    ${({ justifyContent = false } : Styles) => justifyContent && `justify-content: ${justifyContent};`}
    ${({ height = false } : Styles) => height && `height: ${remCalc(height)};`}
    ${({ lineHeight = false } : Styles) => lineHeight && `line-height: ${remCalc(lineHeight)};`}
    ${({ width = false } : Styles) => width && `width: ${remCalc(width)};`}
    ${({ minWidth = false } : Styles) => minWidth && `min-width: ${remCalc(minWidth)};`}
    ${({ padding = false } : Styles) => padding && `padding: ${remCalc(padding)};`}
    ${({ color = false } : Styles) => color && `color: ${color};`}
    ${({ verticalAlign = false } : Styles) => verticalAlign && `vertical-align: ${verticalAlign};`}
    ${({ borderRadius = false } : Styles) => borderRadius && `border-radius: ${remCalc(borderRadius)};`}
    ${({ textAlign = false } : Styles) => textAlign && `text-align: ${textAlign};`}
`;

export default Block