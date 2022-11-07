import React from "react";
import styled from "styled-components";
import { MenuItem, Select } from "@material-ui/core";
// import { ISelectOption } from "models/select-option";
import ChipsContainer from "./ChipsColumn";
// import { v4 as uuidv4 } from "uuid";

interface Props {
  placeholder: string;
  dropDownList: any[];//ISelectOption
  onChange: Function;
  showChips?: boolean;
  multiple?: boolean;
  selectedValue?: any;//ISelectOption
  useNone?: boolean;
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSelect = styled(Select)`
  padding: 0.40625rem 0.625rem;
  font-size: 1.125rem;
  border: 0.125rem solid ${props => props.theme.colors.primaryColor};
  border-radius: 0.4375rem;
  background-color: ${props => props.theme.colors.whiteColor};
  color: ${props => props.theme.colors.primaryColor};
  font-weight: bold;
`;

const StyledMenuItem = styled(MenuItem)`
  width: 100%;
  font-size: 1.125rem;
  color: ${props => props.theme.colors.primaryColor};
  padding: 0.40625rem 0.625rem;
  background-color: ${props => props.theme.colors.whiteColor};
  text-align: start;
`;

const SearchDropDown: React.FC<Props> = (props: Props) => {
  const [titles, setTitles] = React.useState<string[]>(
    props.selectedValue ? [props.selectedValue.title] : [],
  );
  const [values, setValues] = React.useState<number[]>(
    props.selectedValue ? [props.selectedValue.value] : [],
  );
  const showChips = (props.showChips || props.multiple) ?? false;
  const useNone = props.useNone ?? true;

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const { value } = event.target;
    let titleArray: string[] = [];

    if (typeof value === "string") {
      titleArray.push(value as string);
    } else {
      titleArray = value as string[];
    }

    setTitles(titleArray);
    updateValues(titleArray);
  };

  const handleCrossElement = (newValues: string[]) => {
    if (showChips) {
      setTitles(newValues);
      updateValues(newValues);
    }
  };

  const updateValues = (titleArray: string[]) => {
    const newValue: number[] = [];
    titleArray.forEach(element => {
      if (element === "All") {
        newValue.push(-1);
      } else {
        const drop = props.dropDownList.find(d => d.title === element);
        if (drop) {
          newValue.push(drop.value);
        }
      }
    });
    setValues(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  return (
    <Column>
      <StyledSelect
        disableUnderline
        value={titles}
        onChange={handleChange}
        autoWidth
        multiple={props.multiple}
        displayEmpty
        renderValue={selected => {
          if ((selected as string[]).length === 0) {
            return (
              <div style={{ textAlign: "start", padding: "0 0.9375rem" }}>
                {props.placeholder}
              </div>
            );
          }
          if (props.multiple) {
            return (selected as string[]).join(", ");
          }
          return selected as string;
        }}
      >
        <StyledMenuItem value="" disabled>
          {props.placeholder}
        </StyledMenuItem>
        {useNone ? <StyledMenuItem value="All">All</StyledMenuItem> : null}
        {props.dropDownList.map((element, index) => (
          <StyledMenuItem
            // key={uuidv4()}
            value={props.dropDownList[index].title}
          >
            {props.dropDownList[index].title}
          </StyledMenuItem>
        ))}
      </StyledSelect>
      {showChips ? (
        <ChipsContainer values={titles} setValues={handleCrossElement} />
      ) : null}
    </Column>
  );
};

export default SearchDropDown;
