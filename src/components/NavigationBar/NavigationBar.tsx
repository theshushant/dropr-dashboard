import React, {useEffect} from "react";
import styled, {withTheme} from "styled-components";
import {inject, observer} from "mobx-react";
import {GlobalProps} from "../../screen/main/App";
import DroprLogo from "../../assets/DroprD.svg";
import DashboardIcon from "../../assets/dashboard.svg";
import UsersIcon from "../../assets/Users.svg";
import OrderIcon from "../../assets/Order.svg";
import SliderIcon from "../../assets/slider.svg";
import EmployeeIcon from "../../assets/Employee.svg";
import TransactionIcon from "../../assets/Transaction.svg";
import {ColumnContainer, Divider, SpaceY} from "../../utils/globals";
import {useLocation, useNavigate} from "react-router-dom";

interface Props extends GlobalProps {
}

interface dashboardItem {
    icon: string,
    navigationPath: string,
    title: string,
}

const iconList: dashboardItem[] = [
    {icon: DashboardIcon, navigationPath: '/dashboard', title: 'Dashboard'},
    {icon: EmployeeIcon, navigationPath: '/employees', title: 'Employee'},
    {icon: OrderIcon, navigationPath: '/orders', title: 'Order'},
    {icon: TransactionIcon, navigationPath: '/payments', title: 'Transaction'},
    {icon: SliderIcon, navigationPath: '/app-options', title: 'App Options'},
    {icon: UsersIcon, navigationPath: '/users', title: 'Users'},
];

const NavigationContainer = styled.div`
  background-color: ${props => props.theme.colors.whiteColor};
  color: ${props => props.theme.colors.whiteColor};
  width: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  box-shadow: 0 0.01rem 0.625rem NavigationContainer${props => props.theme.colors.greyShadowColor};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  width: 100%;
`;

const NavIconContainer = styled.div`
  font-size: 2.8125rem;
  font-weight: bold;
  width: 100%;
  color: ${props => props.theme.colors.disabledIconColor};
  margin: 0.9375rem 0;
  cursor: pointer;
  text-align: center;
`;

const NavDivider = styled(Divider)`
  height: 0.05rem;
`;

const NavIcon = styled.img`

`;

const NavigationColumn = styled(ColumnContainer)`
  align-items: center;
  justify-content: center;
`;

const NavigationBar: React.FC<Props> = (props: Props) => {
    const {theme} = props;
    // const history = useHistory();
    const [selectedKey, setSelectedKey] = React.useState(
        window.location.pathname,
    );

    const navigate = useNavigate();

    const location = useLocation();

    return (
        <NavigationContainer>
            {iconList.map(element => (
                <NavIconContainer
                    key={element.title}
                    onClick={() => {
                        if (selectedKey !== element.title) {
                            setSelectedKey(element.title);
                            navigate(element.navigationPath);
                        }
                    }}
                    style={{
                        backgroundColor: selectedKey.includes(element.title)
                            ? theme.colors.droprPrimaryBackgroundColor
                            : theme.colors.whiteColor,
                    }}
                >
                    {((location.pathname == '/app-options' || location.pathname == '/employees') && selectedKey == element.title) ?
                        (<NavigationColumn>
                            <SpaceY height={"1rem"}/>
                            <NavIcon src={element.icon} style={{
                                color: selectedKey.includes(element.title)
                                    ? theme.colors.primaryColor
                                    : theme.colors.secondaryColor,
                            }}/>
                            <SpaceY height={"2.5rem"}/>
                            <NavIcon src={element.icon} style={{
                                color: selectedKey.includes(element.title)
                                    ? theme.colors.primaryColor
                                    : theme.colors.secondaryColor,
                            }}/>
                            <SpaceY height={"1rem"}/>
                        </NavigationColumn>)
                        :
                        (<NavIcon src={element.icon} style={{
                            color: selectedKey.includes(element.title)
                                ? theme.colors.primaryColor
                                : theme.colors.secondaryColor,
                        }}/>)}

                </NavIconContainer>
            ))}
            <Container/>
        </NavigationContainer>
    );
};


export default inject("store")(withTheme(observer(NavigationBar)));
