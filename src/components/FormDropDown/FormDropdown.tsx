import React from "react";
import styled from "styled-components";
import { MenuItem, Select } from "@material-ui/core";
// import { v4 as uuidv4 } from "uuid";
import CustomErrorMessage from "../CustomErrorMessage/CustomErrorMessage";
import FormLabel from "../FormLabel/FormLabel";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
  label?: string;
  name: string;
  id: string;
  error?: string | boolean;
  initialValue?: string;
  // dropDownList: ISelectOption[];
  disabled?: boolean;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.625rem 0;
  flex: 1;
`;

const StyledSelect = styled(Select)`
  border: 0.125rem solid ${props =>
          (props.disabled && props.theme.colors.greyColor) ||
          props.theme.colors.primaryColor};
  height: 3.125rem;
  border-radius: 0.4375rem;
  background-color: ${props =>
          (props.disabled && props.theme.colors.greyColor) ||
          props.theme.colors.whiteColor};
  color: ${props =>
          (props.disabled && props.theme.colors.blackColor) ||
          props.theme.colors.primaryColor};
  padding: 0.625rem 0.9375rem;
  text-align: start;

  :invalid {
    font-weight: normal;
    color: ${props => props.theme.colors.greyDarkColor};
  }

  [disabled] {
    font-weight: normal;
    color: ${props => props.theme.colors.greyDarkColor};
  }
`;

const StyledMenuItem = styled(MenuItem)`
  width: 100%;
  font-size: 1.125rem;
  color: ${props => props.theme.colors.primaryColor};
  padding: 0.40625rem 0.625rem;
  background-color: ${props => props.theme.colors.whiteColor};
  text-align: start;
`;

const FormDropdown: React.FC<Props> = (props: Props) => {
  const disabled = props.disabled ?? false;

  return (
    <InputContainer>
      {props.label ? (
        <FormLabel id={props.name} labelText={props.label.toUpperCase()} />
      ) : null}
      <StyledSelect
        disableUnderline
        value={props.value}
        name={props.name}
        id={props.id}
        required
        disabled={disabled}
        // onChange={props.onChange}
        displayEmpty
      >
        <StyledMenuItem value="" disabled>
          {props.initialValue ?? "Select your value"}
        </StyledMenuItem>
        {/*{props.dropDownList.map((element, index) => (*/}
        {/*  <StyledMenuItem*/}
        {/*    key={uuidv4()}*/}
        {/*    value={props.dropDownList[index].value}*/}
        {/*  >*/}
        {/*    {props.dropDownList[index].title}*/}
        {/*  </StyledMenuItem>*/}
        {/*))}*/}
      </StyledSelect>
      {!disabled
        ? props.error && <CustomErrorMessage>{props.error}</CustomErrorMessage>
        : null}
    </InputContainer>
  );
};

export default FormDropdown;
