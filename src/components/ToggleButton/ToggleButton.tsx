import styled, {withTheme} from "styled-components";
import React, {ChangeEvent, useState} from "react";
import {GlobalProps} from "../../screen/main/App";

interface Props extends GlobalProps {
    isActive:boolean,
    onchange:any,
}

const StyledLabel = styled.label<{ checked: boolean }>`
  cursor: pointer;
  text-indent: -9999px;
  width: 4rem;
  height: 2rem;
  display: block;
  border-radius: 100px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: ${({checked}) => (checked ? "2rem" : "calc(55% - 3rem)")};
    width: 2rem;
    height: 2rem;
    border-radius: 90px;
    background: #fff;
    transition: 0.3s;
  }`;

const ToggleSwitch: React.FC<Props> = (props) => {
    const [switchState, setSwitchState] = useState(props.isActive);

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        console.log("---", e.target.checked);
        setSwitchState(!switchState);
        // props.onchange(e);
    }

    const labelStyle = {
        backgroundColor: switchState ?  props.theme.colors.successColor:props.theme.colors.greyColor,
    };

    return (
        <StyledLabel htmlFor="checkbox" checked={switchState} style={labelStyle}>
            <input
                id="checkbox"
                type="checkbox"
                checked={switchState}
                onChange={handleOnChange}/>
        </StyledLabel>
    );
}
// export default inject("store")(observer(withTheme(OrderScreen)));
export default withTheme(ToggleSwitch);