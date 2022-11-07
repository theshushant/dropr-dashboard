import React from "react";
import styled from "styled-components";
import { InputLabel } from "@material-ui/core";

interface Props {
  labelText: string;
  id?: string;
  labelColor?: string;
  margin?: string;
}

const Label = styled(InputLabel)`
  font-size: 0.8rem;
  color: ${[props => props.theme.colors.blackColor]};
  background-color: ${[props => props.theme.colors.whiteColor]};
  padding: 0.3125rem 0;
  text-align: left;
`;

const FormLabel: React.FC<Props> = (props: Props) => {
  const style = {
    color: props.labelColor,
    margin: props.margin,
  };
  return (
    <Label style={style} htmlFor={props.id}>
      {props.labelText}
    </Label>
  );
};

export default FormLabel;
