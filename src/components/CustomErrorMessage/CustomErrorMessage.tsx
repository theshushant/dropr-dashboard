import React from "react";
import styled from "styled-components";
import { FormHelperText } from "@material-ui/core";

interface Props {
  children: React.ReactNode;
}

const StyledFormHelperText = styled(FormHelperText)`
  margin-top: -0.625rem;
  font-size: 1rem;
  color: ${props => props.theme.colors.surfSideRedColor};
  text-align: left;
  font-weight: bold;
`;

const CustomErrorMessage: React.FC<Props> = (props: Props) => (
  <StyledFormHelperText>{props.children}</StyledFormHelperText>
);

export default CustomErrorMessage;
