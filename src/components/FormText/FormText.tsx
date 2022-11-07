import React from "react";
import styled from "styled-components";
import {Input} from "@material-ui/core";
import CustomErrorMessage from "../CustomErrorMessage/CustomErrorMessage";
import FormLabel from "../FormLabel/FormLabel";
import {ColumnContainer, RowContainer, SpaceX} from "../../utils/globals";

interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: any;
    label?: string;
    name: string;
    placeholder?: string;
    id: string;
    type?: string;
    error?: string | boolean;
    disabled?: boolean;
    margin?: string;
    backgroundColor?: string;
    borderRadius?: string;
    textColor?: string;
    iconChild?: React.ReactNode;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.625rem 0;
  max-height: 5rem;
  flex: 1;
  border: 0.125rem solid ${props =>
          (props.theme.primaryColor && props.theme.colors.greyColor) ||
          props.theme.colors.primaryColor};
  border-radius: 0.4375rem;

  :active {
    box-shadow: 0 0 0.625rem ${props => props.theme.colors.primaryColor};
  }

  :focus {
    box-shadow: 0 0 0.625rem ${props => props.theme.colors.primaryColor};
  }

  padding: 0.2rem 0.6rem;
`;

const StyledInput = styled(Input)`
  text-overflow: ellipsis;
  background-color: ${props =>
          // (props.disabled && props.theme.colors.greyColor) ||
          props.theme.colors.whiteColor};
  color: ${props =>
          (props.disabled && props.theme.colors.blackColor) ||
          props.theme.colors.blackColor};
  height: 3.125rem;
  flex-grow: 1;
`;

const RowContainerVersion = styled(RowContainer)`
  justify-content: space-between;
  align-items: center;
`;

const FormText: React.FC<Props> = (props: Props) => {
    const style = {
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,
        color: props.textColor,
    };

    const containerStyle = {
        margin: props?.margin,
    };

    const disabled = props.disabled ?? false;

    return (
        <ColumnContainer>
            <InputContainer style={containerStyle}>
                {props.label ? (
                    <FormLabel id={props.name} labelText={props.label}/>
                ) : null}
                {props.iconChild != null ? <RowContainerVersion>
                    <StyledInput
                        name={props.name}
                        id={props.id}
                        value={props.value}
                        type={props.type ?? "text"}
                        onChange={props.onChange}
                        placeholder={props.placeholder}
                        style={style}
                        disableUnderline
                        disabled={disabled}
                    />
                    <SpaceX width={"0.5rem"}/>
                    {props.iconChild!}
                </RowContainerVersion> : <StyledInput
                    name={props.name}
                    id={props.id}
                    value={props.value}
                    type={props.type ?? "text"}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    style={style}
                    disableUnderline
                    disabled={disabled}
                />}
            </InputContainer>
            {!disabled
                ? props.error && <CustomErrorMessage>{props.error}</CustomErrorMessage>
                : null}
        </ColumnContainer>
    );
};

export default FormText;
