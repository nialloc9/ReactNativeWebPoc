import * as React from "react";
import { Link as StyledLink } from "../../Web/Styled"

type T = { children: string | undefined | React.ReactNode }

const Link = (props : {} & T) : React.ReactNode => <StyledLink {...props} />

export default Link