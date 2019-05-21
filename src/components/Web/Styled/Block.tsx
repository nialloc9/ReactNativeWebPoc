import Styled from "styled-components"

interface Styles {
    backgroundColor: string | boolean;
    alignSelf: string | boolean;
}

const Block : any = Styled("div")`
    ${({ backgroundColor = false } : Styles) => backgroundColor && `background-color: ${backgroundColor}`}
    ${({ alignSelf = false } : Styles) => alignSelf && `align-self: ${alignSelf}`}
`;

export default Block