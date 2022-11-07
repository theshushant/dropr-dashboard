import React, {useEffect, useState} from "react";
import {inject, observer} from "mobx-react";
import styled, {withTheme} from "styled-components";
import {useParams} from "react-router-dom";
import {
    ColumnContainer,
    Divider, PrimaryTableBodyCell,
    RowContainer,
    SpaceX, SpaceY,
    StyledTable, StyledTableContainer,
    StyledTableRow, SuccessTableBodyCell, TableBodyCell,
    TableHeadCell
} from "../../utils/globals";
import {GlobalProps} from "../main/App";
import Loader from "../../components/Loader/Loader";
import {toNumber} from "lodash";
import {Order} from "../../models/OrderModel";
import CustomTypography from "../../components/CustomTypography/CustomTypography";
import ValuePair from "../../components/ValuePair/ValuePair";
import {TableBody, TableHead} from "@material-ui/core";
import CustomButton from "../../components/CustomButton/CustomButton";

const headings = [
    "Id", "User ID", "Package Type", "Category", "Delivery Partner ID", "Distance", "AMT", "Time Slot", "Order Status", "Pay Status"
];

const WhiteCard = styled.div`
  background-color: ${props => props.theme.colors.whiteColor};
  padding: 2rem;
`;

const RowContainerVersion = styled(RowContainer)`
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;

const TableHeadCellVersion = styled(TableHeadCell)`
  background-color: ${(props: any) => props.theme.colors.whiteColor};
`;

const StyledTableContainerVersion = styled(StyledTableContainer)`
  background-color: ${(props: any) => props.theme.colors.whiteColor};
  border-radius: 0.625rem;
`;

const ViewOrder: React.FC<GlobalProps> = (props) => {
    const {orderId} = useParams();
    const store = props.store?.orderStore!;
    const [order, setOrder] = useState(new Order());

    console.log(order);

    useEffect(() => {
        store.getOrderById(toNumber(orderId)).then((element) => {
            setOrder(element)
        });
    }, [orderId]);

    if (store.isLoading) {
        return (
            <Loader/>
        );
    }

    return (
        <ColumnContainer>
            <CustomTypography
                variant="body2"
                fontWeight={"bold"}
                color={props.theme.colors.blackColorOpacity5}
            >
               Back
            </CustomTypography>
            <SpaceY height={"1rem"}/>
            <CustomTypography
                variant="h5"
                fontWeight={"bold"}
                color={props.theme.colors.blackColorOpacity5}
            >
                User Information
            </CustomTypography>
            <SpaceY height={"2rem"}/>
            <StyledTableContainerVersion>
                <StyledTable>
                    <TableHead>
                        <StyledTableRow>
                            {headings.map((heading, index) => (
                                <TableHeadCellVersion align="left" key={heading + "" + index}>
                                    {heading}
                                </TableHeadCellVersion>
                            ))}
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow key={order.id} onClick={() => {
                            // navigate("/orders/" + row.id);
                        }}>
                            <PrimaryTableBodyCell align="left">
                                {order.id}
                            </PrimaryTableBodyCell>
                            <TableBodyCell align="left">
                                {order.user_id}
                            </TableBodyCell>
                            <TableBodyCell align="left">
                                {order.package_type}
                            </TableBodyCell>
                            <TableBodyCell align="left">
                                {order.category}
                            </TableBodyCell>
                            <TableBodyCell align="left">
                                {order.delivery_partner_id ?? "-"}
                            </TableBodyCell>
                            <TableBodyCell align="left">
                                {order.distance}
                            </TableBodyCell>
                            <TableBodyCell align="left">
                                {order.amount}
                            </TableBodyCell>
                            <TableBodyCell align="left">
                                {order.time_slot}
                            </TableBodyCell>
                            <TableBodyCell>
                                <CustomButton
                                    type="submit"
                                    borderRadius="0"
                                    variant={"outlined"}
                                    backgroundColor={props.theme.colors.disabledBorderColor}
                                    textColor={props.theme.colors.disabledIconColor}
                                    disabled={true}
                                >
                                    Completed
                                </CustomButton>
                            </TableBodyCell>
                            <SuccessTableBodyCell align="left">
                                {order.payment_status}
                            </SuccessTableBodyCell>
                        </StyledTableRow>
                    </TableBody>
                </StyledTable>
            </StyledTableContainerVersion>
            <SpaceY height={"2rem"}/>
            <RowContainerVersion>
                <WhiteCard>
                    <CustomTypography
                        variant="h5"
                        fontWeight={"bold"}
                        color={props.theme.colors.blackColorOpacity5}
                    >
                        Order Addresses
                    </CustomTypography>

                    <Divider/>
                    <ValuePair keyValue={"Pick-up Address"}
                               value={"1B howard Street, 1st Floor, whitefeilds, WA 2471501"}/>
                    <ValuePair keyValue={"Drop Off Address"}
                               value={"28A, Cross river Mall, 1st floor, kakardomma court, central business disctrict, shada, 2074151"}/>
                </WhiteCard>
                <SpaceX width={"2rem"}></SpaceX>
                <WhiteCard>
                    <CustomTypography
                        variant="h5"
                        fontWeight={"bold"}
                        color={props.theme.colors.blackColorOpacity5}
                    >
                        Order Addresses
                    </CustomTypography>

                    <Divider/>
                    <ValuePair keyValue={"Pick-up Address"}
                               value={"1B howard Street, 1st Floor, whitefeilds, WA 2471501"}/>
                    <ValuePair keyValue={"Drop Off Address"}
                               value={"28A, Cross river Mall, 1st floor, kakardomma court, central business disctrict, shada, 2074151"}/>
                </WhiteCard>
                <SpaceX width={"2rem"}/>
                <WhiteCard>
                    <CustomTypography
                        variant="h5"
                        fontWeight={"bold"}
                        color={props.theme.colors.blackColorOpacity5}
                    >
                        Order Addresses
                    </CustomTypography>
                    <Divider/>
                    <ValuePair keyValue={"Pick-up Address"}
                               value={"1B howard Street, 1st Floor, whitefeilds, WA 2471501"}/>
                    <ValuePair keyValue={"Drop Off Address"}
                               value={"28A, Cross river Mall, 1st floor, kakardomma court, central business disctrict, shada, 2074151"}/>
                </WhiteCard>

            </RowContainerVersion>
           <RowContainer>
               <WhiteCard>
                   <CustomTypography
                       variant="h5"
                       fontWeight={"bold"}
                       color={props.theme.colors.blackColorOpacity5}
                   >
                       User Information
                   </CustomTypography>
                   <Divider/>
                   <ValuePair keyValue={"Name"}
                              value={order?.user?.name ?? "Nil"}/>
                   <ValuePair keyValue={"Mobile Number"}
                              value={order?.user?.phone_number ?? "Nil"}/>
                   <ValuePair keyValue={"Email Address"}
                              value={order?.user?.email ?? "Nil"}/>
                   <ValuePair keyValue={"Address"}
                              value={order?.pickupAddress?.house_number ?? "Nil"}/>
               </WhiteCard>
               <SpaceX width={"2rem"}></SpaceX>
               <WhiteCard>
                   <CustomTypography
                       variant="h5"
                       fontWeight={"bold"}
                       color={props.theme.colors.blackColorOpacity5}
                   >
                       User Information
                   </CustomTypography>
                   <Divider/>
                   <ValuePair keyValue={"Name"}
                              value={order?.user?.name ?? "Nil"}/>
                   <ValuePair keyValue={"Mobile Number"}
                              value={order?.user?.phone_number ?? "Nil"}/>
                   <ValuePair keyValue={"Email Address"}
                              value={order?.user?.email ?? "Nil"}/>
                   <ValuePair keyValue={"Address"}
                              value={order?.pickupAddress?.house_number ?? "Nil"}/>
               </WhiteCard>
           </RowContainer>
        </ColumnContainer>
    );
}

export default inject("store")(withTheme(observer(ViewOrder)));