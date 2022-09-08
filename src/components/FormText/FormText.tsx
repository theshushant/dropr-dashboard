import React from "react";
import styled from "styled-components";
import { Input } from "@material-ui/core";
import CustomErrorMessage from "../CustomErrorMessage/CustomErrorMessage";
import FormLabel from "../FormLabel/FormLabel";

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
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.625rem 0;
  flex: 1;
`;

const StyledInput = styled(Input)`
  padding: 0.625rem 0.9375rem;
  text-overflow: ellipsis;
  border: 0.125rem solid
    ${props =>
      (props.disabled && props.theme.colors.greyColor) ||
      props.theme.colors.primaryColor};
  border-radius: 0.4375rem;
  background-color: ${props =>
    (props.disabled && props.theme.colors.greyColor) ||
    props.theme.colors.whiteColor};
  color: ${props =>
    (props.disabled && props.theme.colors.blackColor) ||
    props.theme.colors.primaryColor};
  height: 3.125rem;
  :active {
    box-shadow: 0 0 0.625rem ${props => props.theme.colors.primaryColor};
  }
  :focus {
    box-shadow: 0 0 0.625rem ${props => props.theme.colors.primaryColor};
  }
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
    <InputContainer style={containerStyle}>
      {props.label ? (
        <FormLabel id={props.name} labelText={props.label.toUpperCase()} />
      ) : null}
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
      {!disabled
        ? props.error && <CustomErrorMessage>{props.error}</CustomErrorMessage>
        : null}
    </InputContainer>
  );
};

export default FormText;
