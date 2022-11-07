import React from "react";
import styled, {withTheme} from "styled-components";
import {Button, CircularProgress} from "@material-ui/core";
import {GlobalProps} from "../../screen/main/App";
import {RowContainer, SpaceX} from "../../utils/globals";

interface Props extends GlobalProps {
    children: React.ReactNode;
    variant?: "text" | "outlined" | "contained" | undefined;
    backgroundColor?: string;
    onClick?: any;
    type: "button" | "submit" | "reset" | undefined;
    textColor?: string;
    padding?: string;
    borderRadius?: string;
    margin?: string;
    width?: string;
    borderColor?: string;
    disabled?: boolean;
    minWidth?: string;
    textTransform?:
        | "inherit"
        | "none"
        | "initial"
        | "-moz-initial"
        | "revert"
        | "unset"
        | "capitalize"
        | "full-size-kana"
        | "full-width"
        | "lowercase"
        | "uppercase"
        | undefined;
    isSubmitting?: boolean;
    icon?: string;
}

const StyledButton = styled(Button)`
  font-size: 1.125rem;
  padding: 0.4rem 1.875rem;
  border-radius: 0.3125rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${props =>
          (props.variant === "outlined" && props.theme.colors.whiteColor) ||
          props.theme.colors.primaryColor};
  border: ${props =>
          (props.variant === "outlined" &&
                  `0.125rem solid ${props.theme.colors.primaryColor}`) ||
          "0"};
  color: ${props =>
          (props.variant === "outlined" && props.theme.colors.primaryColor) ||
          props.theme.colors.whiteColor};

  &:hover {
    background-color: ${props => props.theme.colors.primaryColor};
    color: ${props => props.theme.colors.whiteColor};
  }
`;


const NavIcon = styled.img`

`;

const RowContainerVersion = styled(RowContainer)`
  justify-content: center;
`;

const StyledCircularProgress = styled(CircularProgress)`
  color: ${props => props.theme.colors.whiteColor};
`;

const CustomButton: React.FC<Props> = (props: Props) => {
    const style = {
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        padding: props.padding,
        borderRadius: props.borderRadius,
        borderColor: props.borderColor,
        margin: props.margin,
        width: props.width,
        opacity: props.disabled ? 0.7 : 1,
        textTransform: props.textTransform,
        minWidth: props.minWidth,
    };
    const {theme} = props;

    let progressStyle;
    if (props.variant === "outlined") {
        progressStyle = {color: theme.colors.primaryColor};
    }

    return (
        <StyledButton
            type={props.type}
            variant={props.variant}
            style={style}
            disabled={props.disabled}
            onClick={() => {
                if (!props.disabled && props.onClick) {
                    props.onClick();
                }
            }}
        >
            {props.isSubmitting ? (
                <StyledCircularProgress style={progressStyle} size={30} thickness={4}/>
            ) : (
                props.icon != null
                    ? (<RowContainerVersion>
                        <NavIcon src={props.icon}/>
                        <SpaceX width={"1rem"}/>
                        {props.children}
                    </RowContainerVersion>)
                    : props.children
            )}
        </StyledButton>
    );
};

export default withTheme(CustomButton);
