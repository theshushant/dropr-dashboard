import React from "react";
import styled from "styled-components";
import Chip from "@material-ui/core/Chip";

interface Props {
  values: string[];
  setValues: Function;
}

const ChipsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledChip = styled(Chip)`
  background-color: ${props => props.theme.colors.primaryDarkColor};
  font-size: 0.9375rem;
  width: fit-content;
  margin-top: 0.3125rem;
`;

const ChipsContainer: React.FC<Props> = (props: Props) => {
  return (
    <ChipsColumn>
      {props.values.map((option: string) => (
        <StyledChip
          // key={uuidv4()}
          color="primary"
          onDelete={() => {
            const newValues = [...props.values];
            const valueIndex = newValues.indexOf(option);
            if (valueIndex > -1) {
              newValues.splice(valueIndex, 1);
            }
            props.setValues(newValues);
          }}
          label={option}
          // deleteIcon={<CloseIcon />}
        />
      ))}
    </ChipsColumn>
  );
};

export default ChipsContainer;