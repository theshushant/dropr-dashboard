import React from "react";
import styled, {withTheme} from "styled-components";
import { RowContainer} from "../../utils/globals";
import CustomTypography from "../CustomTypography/CustomTypography";
import {GlobalProps} from "../../screen/main/App";
import {inject, observer} from "mobx-react";
import {useLocation} from "react-router-dom";
import {useGetBreadCrums} from "../../utils/routes";

const RowContainerVersion = styled(RowContainer)`
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const FlexContainerVersion = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
`;

interface Props extends GlobalProps {
}

const NavigationTitleBar: React.FC<Props> = (props) => {
    const location = useLocation();
    const data = useGetBreadCrums(location.pathname);
    return <RowContainerVersion>
        <CustomTypography
            variant="h4"
            fontWeight={"bold"}
            color={props.theme.colors.blackColorOpacity5}
            textAlign={"center"}
        >
            {data.main}
        </CustomTypography>
        <FlexContainerVersion>
            <CustomTypography
                variant="h5"
                fontWeight={"bold"}
                color={props.theme.colors.greyColor}
                textAlign={"center"}
            >
                {data.sub}
            </CustomTypography>
        </FlexContainerVersion>
    </RowContainerVersion>
};

export default inject("store")(observer(withTheme(NavigationTitleBar)));