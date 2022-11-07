import React from "react";
import Chip from "@material-ui/core/Chip";
import styled, { withTheme } from "styled-components";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { IconButton } from "@material-ui/core";
import {GlobalProps} from "../../screen/main/App";
// import { v4 as uuidv4 } from "uuid";

interface Props extends GlobalProps {
  list: string[];
  placeholder: string;
  width?: string;
  dropDown?: boolean;
  onSelect?: Function;
}

const ChipsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: ${props => props.theme.width};
`;

const StyledChip = styled(Chip)`
  background-color: ${props => props.theme.colors.primaryDarkColor};
  font-size: 0.9375rem;
  width: fit-content;
  margin-top: 0.3125rem;
`;

const StyledInputAdornment = styled(InputAdornment)`
  position: absolute;
  right: 0;
  padding: 1.125rem 0rem;
`;

const StyledInputAdornmentDropDown = styled(InputAdornment)`
  position: absolute;
  right: -0.625rem;
  padding: 1.125rem 0;
`;

// const StyledSearchIcon = styled(SearchIcon)`
//   color: ${props => props.theme.colors.primaryColor};
//   font-size: 1.5625rem;
// `;
//
// const StyledArrowDropDownIcon = styled(ArrowDropDownIcon)`
//   color: ${props => props.theme.colors.primaryColor};
//   font-size: 1.5625rem;
// `;

const CustomSearchBar: React.FC<Props> = (props: Props) => {
  const [values, setValues] = React.useState<any[]>([]);

  const { theme } = props;

  const [open, setOpen] = React.useState(false);

  return <></>
    // (
    // <Wrapper theme={{ width: "15.25rem" }}>
    // <Wrapper>
    //   <Autocomplete
    //     freeSolo={props.dropDown ?? true}
    //     clearOnEscape
    //     id="free-solo-2-demo"
    //     open={open}
    //     onInputChange={() => setOpen(false)}
    //     options={props.list.map(option => option)}
    //     renderOption={(option:any, params:any) => (
    //       <div style={{ fontSize: "1.125rem" }} {...params}>
    //         {option}
    //       </div>
    //     )}
    //     renderInput={(params:any) => (
    //       <TextField
    //         style={{
    //           borderRadius: "0.5625rem",
    //           border: `0.125rem solid ${theme.colors.primaryColor}`,
    //           backgroundColor: "white",
    //           padding: "0.3125rem 0.625rem",
    //         }}
    //         {...params}
    //         placeholder={props.placeholder}
    //         margin="dense"
    //         onChange={() => setOpen(true)}
    //         onBlur={() => setOpen(false)}
    //         InputProps={{
    //           ...params.InputProps,
    //           style: {
    //             fontSize: "0.9375rem",
    //             color: theme.colors.greyDarkColor,
    //             position: "relative",
    //           },
    //           disableUnderline: true,
    //           type: "search",
    //           endAdornment:
    //             props.dropDown !== undefined && props.dropDown ? (
    //               <StyledInputAdornmentDropDown position="end">
    //                 <IconButton onClick={() => setOpen(!open)}>
    //                   <StyledArrowDropDownIcon />
    //                 </IconButton>
    //               </StyledInputAdornmentDropDown>
    //             ) : (
    //               <StyledInputAdornment position="end">
    //                 <StyledSearchIcon />
    //               </StyledInputAdornment>
    //             ),
    //         }}
    //       />
    //     )}
    //     onChange={(event: any, value: any) => {
    //       if (props.list.includes(value)) {
    //         const newValues = [...values, value];
    //         setValues(newValues);
    //         if (props.onSelect) props.onSelect(newValues);
    //       }
    //     }}
    //   />
    //   <ChipsContainer theme={{ width: props.width }}>
    //     {values.map((option: string) => (
    //       <StyledChip
    //         // key={uuidv4()}
    //         color="primary"
    //         onDelete={() => {
    //           const newValues = [...values];
    //           const valueIndex = newValues.indexOf(option);
    //           if (valueIndex > -1) {
    //             newValues.splice(valueIndex, 1);
    //           }
    //           setValues(newValues);
    //         }}
    //         label={option}
    //         // deleteIcon={<CloseIcon />}
    //       />
    //     ))}
    //   </ChipsContainer>
    // </Wrapper>
  // )
    ;
};

export default withTheme(CustomSearchBar);
