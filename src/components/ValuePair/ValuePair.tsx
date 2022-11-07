import React from "react";
import {RowContainer, SpaceX} from "../../utils/globals";
import CustomTypography from "../CustomTypography/CustomTypography";
import {inject, observer} from "mobx-react";
import styled, {withTheme} from "styled-components";
import {GlobalProps} from "../../screen/main/App";

interface Props extends GlobalProps {
    keyValue: string,
    value: string,
}

const RowContainerVersion = styled(RowContainer)`
  justify-content: start;
  align-items: center;
`;


const ValuePair: React.FC<Props> = (props) => {
    return (
        <RowContainerVersion>
            <CustomTypography
                variant="body2"
                fontWeight={"bold"}
                color={props.theme.colors.blackColor}
            >
                {props.keyValue}
            </CustomTypography>
            <SpaceX width={"4rem"}></SpaceX>
            <CustomTypography
                variant="body2"
                color={props.theme.colors.blackColorOpacity5}
            >
                {props.value}
            </CustomTypography>

        </RowContainerVersion>
    );
}

export default inject("store")(withTheme(observer(ValuePair)));