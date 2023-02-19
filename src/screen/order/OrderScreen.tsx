import {inject, observer} from "mobx-react";
import styled, {withTheme} from "styled-components";
import {GlobalProps} from "../main/App";
import React, {useEffect} from "react";
import {
    ColumnContainer, FlexContainer,
    PrimaryTableBodyCell, RowContainer,
    StyledTable,
    StyledTableContainer,
    StyledTableRow, SuccessTableBodyCell, TableBodyCell,
    TableHeadCell
} from "../../utils/globals";
import SearchField from "../../components/CustomSearchBar/SearchField";
import CustomButton from "../../components/CustomButton/CustomButton";
import {TableBody, TableHead} from "@material-ui/core";
import Loader from "../../components/Loader/Loader";
import {useNavigate} from "react-router-dom";


const headings = [
    "Id", "User ID", "Package Type", "Category", "Delivery Partner ID", "Distance", "AMT", "Time Slot", "Order Status", "Pay Status"
];

const RowContainerVersion = styled(RowContainer)`
  flex-grow: 0;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const WhiteCard = styled.div`
  background-color: ${props => props.theme.colors.whiteColor};
`;

const EmptyData = styled.div`
  height: 50rem;
  width: 100%;
`;

const  StyledTableContainerVersion = styled(StyledTableContainer)`
  height: 75vh;
`;


const OrderScreen: React.FC<GlobalProps> = (props) => {
    const store = props.store!.orderStore!;
    const navigate = useNavigate();

    useEffect(() => {
        if (!store.isLoading && store.orders.length < 1) {
            store.fetchOrders();
        }
    }, [store]);

    if (store?.isLoading) {
        return (
            <Loader/>
        );
    }

    return (
        <WhiteCard key={"OrderScreen"}>
            <ColumnContainer>
                <RowContainerVersion>
                    <SearchField
                        placeholder={"Type here"}
                        onSubmit={() => {
                        }}
                    />
                    <FlexContainer flex={2}/>
                    {false ? <RowContainer>
                        <CustomButton
                            type="submit"
                            borderRadius="0"
                            width={"20rem"}
                            variant={"text"}
                            backgroundColor={props.theme.colors.whiteColor}
                            textColor={props.theme.colors.primaryColor}
                        >
                            Download
                        </CustomButton>
                        <CustomButton
                            type="submit"
                            borderRadius="0"
                            width={"20rem"}
                            variant={"text"}
                            backgroundColor={props.theme.colors.whiteColor}
                            textColor={props.theme.colors.primaryColor}
                        >
                            Download
                        </CustomButton>
                        <CustomButton
                            type="submit"
                            borderRadius="0"
                            width={"20rem"}
                            variant={"text"}
                            backgroundColor={props.theme.colors.whiteColor}
                            textColor={props.theme.colors.primaryColor}
                        >
                            Filters
                        </CustomButton>
                    </RowContainer> : <CustomButton
                        type="submit"
                        borderRadius="0"
                        width={"20rem"}
                        variant={"contained"}
                        // isSubmitting={formikProps.isSubmitting}
                        // disabled={formikProps.isSubmitting}
                    >
                        Filters
                    </CustomButton>}

                </RowContainerVersion>
                {store.orders.length < 1
                    ? (<EmptyData>No Data available </EmptyData>)
                    : (<StyledTableContainerVersion>
                        <StyledTable>
                            <TableHead>
                                <StyledTableRow>
                                    {headings.map((heading, index) => (
                                        <TableHeadCell align="left" key={heading + "" + index}>
                                            {heading}
                                        </TableHeadCell>
                                    ))}
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {store.orders.map(row => (
                                    <StyledTableRow key={row.id} onClick={() => {
                                        navigate("/orders/" + row.id);
                                    }}>
                                        <PrimaryTableBodyCell align="left">
                                            {row.id}
                                        </PrimaryTableBodyCell>
                                        <TableBodyCell align="left">
                                            {row.user_id}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {row.package_type}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {row.category}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {row.delivery_partner_id ?? "-"}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {row.distance}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {row.amount}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {row.time_slot}
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
                                            {row.payment_status}
                                        </SuccessTableBodyCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </StyledTable>
                    </StyledTableContainerVersion>)}
            </ColumnContainer>
        </WhiteCard>
    );
}

export default inject("store")(withTheme(observer(OrderScreen)));