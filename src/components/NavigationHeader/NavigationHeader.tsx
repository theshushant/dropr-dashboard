import React from "react";
import styled from "styled-components";
import {FlexContainer, RowContainer} from "../../utils/globals";
import SearchField from "../CustomSearchBar/SearchField";


const RowContainerVersion = styled(RowContainer)`
  justify-content: space-between;
  padding: 1rem 2rem;
  box-shadow: 0 0.01rem 0.625rem ${props => props.theme.colors.greyShadowColor};
`;

const FlexContainerVersion = styled(FlexContainer)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavigationHeader: React.FC = () => {
    return <RowContainerVersion>
        <SearchField placeholder={"Search"} onSubmit={() => {
        }}/>
        <FlexContainerVersion flex={2}>
            Sushant
        </FlexContainerVersion>
    </RowContainerVersion>;
};

export default NavigationHeader;