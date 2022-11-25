import React, {useEffect} from "react";
import styled, {withTheme} from "styled-components";
import {ColumnContainer, RowContainer, SpaceX} from "../../utils/globals";
import SearchField from "../CustomSearchBar/SearchField";
import {GlobalProps} from "../../screen/main/App";
import {inject, observer} from "mobx-react";
import CustomTypography from "../CustomTypography/CustomTypography";
import userAvatarLogo from "../../assets/UserAvatar.svg";
import {IoMdNotificationsOutline} from "react-icons/io";


const RowContainerVersion = styled(RowContainer)`
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.01rem 0.625rem ${props => props.theme.colors.greyShadowColor};
  padding-left: 2rem;
  padding-right: 2rem;
`;

const ColumnContainerVersion = styled(ColumnContainer)`
  width: fit-content;
`;


const RowContainerVersion1 = styled(RowContainer)`
  justify-content: end;
  align-items: center;
  max-height: 5rem;
  width: min-content;
`;

const RowContainerVersion2 = styled(RowContainer)`
  justify-content: center;
  align-items: center;
  max-height: 5rem;
  background-color: ${props => props.theme.colors.backgroundColor};
  padding: 0.5rem 1rem;
  max-width: fit-content;
`;


const FlexContainerVersion = styled.div`
  flex-grow: 1;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 2rem;
  object-position: center;
  object-fit: cover;
  contain: content;
  background-color: ${props => props.theme.colors.primaryColor};
  pointer-events: none;
`;

const NavigationHeader: React.FC<GlobalProps> = (props) => {
    const store = props.store?.user!;

    useEffect(() => {
        if (store.loggedInUser === undefined) {
            store.getMe();
        }
    }, [store]);

    return <RowContainerVersion>
        <SearchField placeholder={"Search"} onSubmit={() => {
        }}/>
        <FlexContainerVersion/>
        <RowContainerVersion1>
            <IoMdNotificationsOutline size={"2rem"}/>
            <SpaceX width={"1rem"}></SpaceX>
            <RowContainerVersion2>
                <Image draggable={false}
                       src={store.loggedInUser?.profile_pic_url ?? userAvatarLogo}
                       alt="Profile Image"/>
                <SpaceX width={"0.5rem"}/>
                <ColumnContainerVersion>
                    <CustomTypography
                        variant="body1"
                        fontWeight={"bold"}
                        color={props.theme.colors.blackColorOpacity5}
                        textAlign={"left"}
                    >
                        {store.loggedInUser?.name}
                    </CustomTypography>
                    <CustomTypography
                        variant="body2"
                        fontWeight={"lighter"}
                        color={props.theme.colors.blackColorOpacity5}
                        textAlign={"left"}
                    >
                        {store.loggedInUser?.role}
                    </CustomTypography>
                </ColumnContainerVersion>
            </RowContainerVersion2>
        </RowContainerVersion1>
    </RowContainerVersion>;
};

export default inject("store")(withTheme(observer(NavigationHeader)));