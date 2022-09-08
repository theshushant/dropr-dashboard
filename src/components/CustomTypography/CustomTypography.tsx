import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

interface Props {
  children: React.ReactNode;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "subtitle1";
  color?: string;
  margin?: string;
  textAlign?:
    | "inherit"
    | "left"
    | "center"
    | "right"
    | "justify"
    | "initial"
    | "end"
    | "start"
    | "-moz-initial"
    | "revert"
    | "unset"
    | "match-parent"
    | undefined;
  fontWeight?:
    | number
    | "inherit"
    | "initial"
    | "-moz-initial"
    | "revert"
    | "unset"
    | "bold"
    | "normal"
    | "bolder"
    | "lighter"
    | undefined;
  textDecoration?: string;
}

const StyledCustomTypography = styled(Typography)`
  font-size: ${props =>
    (props.variant === "h1" && "3rem") ||
    (props.variant === "h2" && "2.5rem") ||
    (props.variant === "h3" && "2rem") ||
    (props.variant === "h4" && "1.5rem") ||
    (props.variant === "h5" && "1.25rem") ||
    (props.variant === "h6" && "1rem") ||
    (props.variant === "body1" && "1.125rem") ||
    (props.variant === "subtitle1" && "0.875rem") ||
    (props.variant === "body2" && "0.75rem")};
  font-weight: bold;
  color: ${props => props.theme.colors.blackColor};
  text-align: left;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

const CustomTypography: React.FC<Props> = (props: Props) => {
  const style = {
    color: props.color,
    margin: props.margin,
    textAlign: props.textAlign,
    fontWeight: props.fontWeight,
    textDecoration: props.textDecoration,
  };
  return (
    <StyledCustomTypography style={style} variant={props.variant}>
      {props.children}
    </StyledCustomTypography>
  );
};

export default CustomTypography;
