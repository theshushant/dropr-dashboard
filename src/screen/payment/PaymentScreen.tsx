import {inject, observer} from "mobx-react";
import styled, {withTheme} from "styled-components";
import {GlobalProps} from "../main/App";
import React, {useEffect} from "react";
import {
    ColumnContainer, FlexContainer,
    PrimaryTableBodyCell, RowContainer,
    StyledTable,
    StyledTableContainer,
    StyledTableRow, TableBodyCell,
    TableHeadCell
} from "../../utils/globals";
import SearchField from "../../components/CustomSearchBar/SearchField";
import {TableBody, TableHead} from "@material-ui/core";
import Loader from "../../components/Loader/Loader";
import {useNavigate} from "react-router-dom";

interface Props extends GlobalProps {
}

const headings = [
    "Order Id", "Transaction ID", "Amount", "Receipt Number", "Payment Method", "Time", "Date", "Status", "Invoice"
];

const RowContainerVersion = styled(RowContainer)`
  flex-grow: 0;
  justify-content: start;
  padding: 1rem 2rem;
`;

const WhiteCard = styled.div`
  background-color: ${props => props.theme.colors.whiteColor};
`;

const EmptyData = styled.div`
  height: 50rem;
  width: 100%;
`;


const StyledTableContainerVersion = styled(StyledTableContainer)`
  max-height: 75vh;
`;


const PaymentScreen: React.FC<Props> = (props) => {
    const store = props.store?.orderStore!;
    const navigate = useNavigate();
    useEffect(() => {
        if (store.commissions.length < 1 && !store.isLoading) {

                store.getCommissions().catch(e => {
                   if(e?.errorCode == '703')
                    navigate('/login');
                });

        }
    }, []);

    if (store.isLoading) {
        return (
            <Loader/>
        );
    }
    return (
        <WhiteCard>
            <ColumnContainer>
                <RowContainerVersion>
                    <SearchField
                        placeholder={"Search by Order ID"}
                        onSubmit={() => {
                        }}
                    />
                    <FlexContainer flex={3}/>
                </RowContainerVersion>
                {store.commissions.length < 1 ? (<EmptyData>No Data available </EmptyData>) :
                    <StyledTableContainerVersion>
                        <StyledTable>
                            <TableHead>
                                <StyledTableRow>
                                    {headings.map((heading, index) => (
                                        <TableHeadCell align="left" key={heading + index}>
                                            {heading}
                                        </TableHeadCell>
                                    ))}
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {store.commissions.map((commission, index) => {
                                    return (<>
                                        <PrimaryTableBodyCell align="left">
                                            {commission.id}
                                        </PrimaryTableBodyCell>
                                        <TableBodyCell align="left">
                                            {commission.employee_id}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {commission.commission}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {commission.employee_id}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {commission.employee_id}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {commission.order_id}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {commission.order_id}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {commission.settlement_status}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {commission.employee_id}
                                        </TableBodyCell>
                                    </>)

                                })}
                            </TableBody>
                        </StyledTable>
                    </StyledTableContainerVersion>}

            </ColumnContainer>
        </WhiteCard>
    );
}

export default inject("store")(withTheme(observer(PaymentScreen)));