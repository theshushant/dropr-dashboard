import React from "react";
import styled from "styled-components";
import FormLabel from "../FormLabel/FormLabel";
import CustomTypography from "../CustomTypography/CustomTypography";

interface Props {
  id: string;
  label: string;
  labelColor?: string;
  text: string | undefined;
  textColor: string;
  margin?: string;
  fontWeight?: "normal" | "bold";
}

const LabeledText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1.5625rem 0;
  flex: 1;
  text-align: left;
`;

const FormLabelWithText: React.FC<Props> = (props: Props) => {
  const style = {
    margin: props.margin,
  };

  return (
    <LabeledText style={style}>
      {props.label ? (
        <FormLabel
          labelText={props.label}
          id={props.id}
          labelColor={props.labelColor}
        />
      ) : null}
      <CustomTypography
        variant="h4"
        fontWeight={props.fontWeight ?? "normal"}
        color={props.textColor}
      >
        {props.text}
      </CustomTypography>
    </LabeledText>
  );
};

export default FormLabelWithText;
