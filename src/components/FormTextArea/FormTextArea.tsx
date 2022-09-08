import React from "react";
import styled from "styled-components";
import { TextareaAutosize } from "@material-ui/core";
import FormLabel from "../FormLabel/FormLabel";
import CustomErrorMessage from "../CustomErrorMessage/CustomErrorMessage";

interface Props {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: any;
  label: string;
  name: string;
  placeholder?: string;
  id: string;
  error?: string | boolean;
  backgroundColor?: string;
  borderRadius?: string;
  rows?: string;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.625rem 0;
  flex: 1;
`;

const StyledTextArea = styled(TextareaAutosize)`
  padding: 0.625rem;
  font-size: 1.125rem;
  border: 0.125rem solid ${props => props.theme.colors.primaryColor};
  border-radius: 0.4375rem;
  background-color: ${props => props.theme.colors.whiteColor};
  color: ${props => props.theme.colors.primaryColor};
  font-weight: bold;
  min-height: 5rem;
  ::placeholder {
    font-weight: normal;
  }
  :active {
    box-shadow: 0 0 0.625rem ${props => props.theme.colors.primaryColor};
  }
`;

const FormTextArea: React.FC<Props> = (props: Props) => {
  const style = {
    backgroundColor: props.backgroundColor,
    borderRadius: props.borderRadius,
  };

  return (
    <InputContainer>
      {props.label ? (
        <FormLabel id={props.name} labelText={props.label.toUpperCase()} />
      ) : null}
      <StyledTextArea
        style={style}
        name={props.name}
        rows={props.rows}
        placeholder={props.placeholder}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error && <CustomErrorMessage>{props.error}</CustomErrorMessage>}
    </InputContainer>
  );
};

export default FormTextArea;
