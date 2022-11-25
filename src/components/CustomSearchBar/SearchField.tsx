import React from "react";
import styled from "styled-components";
import InputAdornment from "@material-ui/core/InputAdornment";
import {AiOutlineSearch} from 'react-icons/ai';
import {Input} from "@material-ui/core";

interface Props {
    placeholder: string;
    onSubmit: Function;
    showChips?: boolean;
    type?: string;
}

const StyledInput = styled(Input)`
  padding: 0.40625rem 0.9375rem;
  font-size: 1.125rem;
  border: 0.125rem solid ${props => props.theme.colors.disabledBorderColor};
  border-radius: 0.4375rem;
  background-color: ${props => props.theme.colors.backgroundColor};
  color: ${props => props.theme.colors.disabledBorderColor};
  font-weight: bold;
  flex: 1;
  max-height: 3rem;

  :active {
    box-shadow: 0 0 0.625rem ${props => props.theme.colors.primaryColor};
    color: ${props => props.theme.colors.primaryColor};
    border-color: ${props => props.theme.colors.primaryColor};
  }

`;

const StyledInputAdornment = styled(InputAdornment)`
  text-align: center;
`;

const SearchField: React.FC<Props> = (props: Props) => {
    const [values, setValues] = React.useState<string[]>([]);
    const [item, setItem] = React.useState("");
    const showChips = props.showChips ?? false;

    const keyDownFunction = (event: any) => {
        if (event.keyCode === 13) {
            const newValue = [...values, event.target.value];
            setValues(newValue);
            if (props.onSubmit) {
                if (showChips) {
                    props.onSubmit(newValue);
                    setItem("");
                } else {
                    props.onSubmit(event.target.value);
                }
            }
        }
    };

    const handleCrossElement = (newValues: string[]) => {
        if (showChips) {
            if (props.onSubmit) {
                setValues(newValues);
                props.onSubmit(newValues);
            }
        }
    };

    const handleChange = (event: any) => {
        setItem(event.target.value as string);
    };

    return (
        <StyledInput
            placeholder={props.placeholder}
            margin="dense"
            value={item}
            type={props.type ? props.type : "text"}
            onChange={handleChange}
            disableUnderline
            onKeyDown={keyDownFunction}
            startAdornment={
                <StyledInputAdornment position="start">
                    <AiOutlineSearch size={"20"}/>
                </StyledInputAdornment>
            }
        />
    );
};

export default SearchField;
