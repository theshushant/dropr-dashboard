import React, {useEffect} from "react";
import {inject, observer} from "mobx-react";
import styled, {withTheme} from "styled-components";
import {ColumnContainer, FlexContainer, NoScrollContainer, RowContainer} from "../../utils/globals";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import CreateEmployee from "../employee/CreateEmployee";
import NavigationTitleBar from "../../components/NavigationTitleBar/NavigationTitleBar";
import NavigationHeader from "../../components/NavigationHeader/NavigationHeader";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import OrderScreen from "../order/OrderScreen";
import EmployeeScreen from "../employee/EmployeeScreen";
import PaymentScreen from "../payment/PaymentScreen";
import DashboardScreen from "../dashboard/DashboardScreen";
import CustomGreyBgCard from "../../components/CustomGreyBgCard/CustomGreyBgCard";
import AppCategoryOption from "../slider/Category/AppCategoryOption";
import AppPosterOption from "../slider/Poster/AppPosterOption";
import DroprLogo from "../../assets/DroprD.svg";
import AppTagOption from "../slider/Tag/AppTagOption";
import ViewEmployee from "../employee/ViewEmployee";
import ViewOrder from "../order/ViewOrder";
import {errorService} from "../../services/ErrorService";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import SlidingChild from "../../components/SlidingChild/SlidingChild";

const NavIcon = styled.img`
  width: 6rem;
  height: 3rem;
`;
const HomeRowContainer = styled(RowContainer)`
  align-items: center;
`;

const Home: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("auth_token") && errorService.isTokenInvalid) {
            navigate('/login');
            errorService.voidError();
        }
    }, [errorService.error]);

    return (
        <NoScrollContainer>
            <ColumnContainer>
                <HomeRowContainer>
                    <NavIcon
                        src={
                            DroprLogo
                        }
                        alt="profile image"
                        onClick={() => {
                            // history.push(getCompleteRoute(RouteComponents.PROFILE));
                        }}
                    />
                    {/*<NavDivider/>*/}
                    <NavigationHeader/>
                </HomeRowContainer>

                <RowContainer>
                    <FlexContainer flex={1}>
                        {/*<SlidingChild isOpen={true}>*/}
                            <NavigationBar/>
                        {/*</SlidingChild>*/}
                    </FlexContainer>
                    {/*<SideDrawer isOpen={false}></SideDrawer>*/}
                    <ColumnContainer>
                        <NavigationTitleBar/>
                        <CustomGreyBgCard padding={"2rem"}>
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Navigate to={'/employees'}/>}
                                />
                                <Route element={<DashboardScreen/>} path={'/dashboard'}/>
                                <Route element={<AppCategoryOption/>} path={'/app-options'}/>
                                <Route element={<AppPosterOption/>} path={'/users'}/>
                                <Route element={<CreateEmployee/>} path={'/create-employee'}/>
                                <Route element={<EmployeeScreen/>} path={'/employees'}/>
                                <Route element={<ViewEmployee/>} path={'/employee/:employeeId'}/>
                                <Route element={<OrderScreen/>} path={'/orders'}/>
                                <Route element={<ViewOrder/>} path={'/orders/:orderId'}/>
                                <Route element={<PaymentScreen/>} path={'/payments'}/>
                                <Route element={<AppTagOption/>} path={'/tags'}/>
                                <Route element={<AppPosterOption/>} path={'/posters'}/>
                                <Route path={'/*'} element={<Navigate to={'/not-found'}/>}/>
                            </Routes>
                        </CustomGreyBgCard>
                    </ColumnContainer>
                </RowContainer>
            </ColumnContainer>
        </NoScrollContainer>
    );
};

export default inject("store")(withTheme(observer(Home)));