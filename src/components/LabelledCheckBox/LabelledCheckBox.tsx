import React from "react";
import styled, {withTheme} from "styled-components";
import {GlobalProps} from "../../screen/main/App";
import {RowContainer, SpaceX} from "../../utils/globals";
import CustomTypography from "../CustomTypography/CustomTypography";

interface Props extends GlobalProps {
    label: string,
}

const CheckBox = styled.input`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 0.25rem;
  background-color: ${props => props.theme.colors.primaryColor};
`;

const RowContainerVersion = styled(RowContainer)`
  align-items: center;
  width: 40%;
`;

const LabelledCheckBox: React.FC<Props> = (props) => {
    const [selected, changeSelected] = React.useState(false);
    const {theme, label} = props;

    return <RowContainerVersion>
        <CheckBox
            type="checkbox"
            onClick={() => {
                changeSelected(!selected);
            }}
        />
        <SpaceX width="0.75rem"/>
        <CustomTypography
            variant="body1"
            color={selected ? theme.colors.primaryColor : theme.colors.blackColor}
        >
            {label}
        </CustomTypography>
    </RowContainerVersion>;
}

export default withTheme(LabelledCheckBox);
