import {inject, observer} from "mobx-react";
import styled, {withTheme} from "styled-components";
import {GlobalProps} from "../main/App";
import React from "react";
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
import InvoiceIcon from "../../assets/invoice.svg";

interface Props extends GlobalProps {
}

const headings = [
    "Order Id", "Transaction ID", "Amount", "Receipt Number", "Payment Method", "Time", "Date", "Status", "Invoice"
];

const mockData = [
    ["1234", "591644527", "$120", "Fragile", "2751052-11", "Apple Pay", "13:56 AM", "Received"],
    ["1234", "591644527", "$120", "Fragile", "2751052-11", "Apple Pay", "13:56 AM", "Received"],
];

const RowContainerVersion = styled(RowContainer)`
  flex-grow: 0;
  justify-content: start;
  padding: 1rem 2rem;
`;

const WhiteCard = styled.div`
  background-color: ${props => props.theme.colors.whiteColor};
`;

const NavIcon = styled.img`

`;

const  StyledTableContainerVersion = styled(StyledTableContainer)`
  max-height: 75vh;
`;


const PaymentScreen: React.FC<Props> = (props) => {
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
                            {mockData.map(row => (
                                <StyledTableRow>
                                    {row.map((data, index) => {
                                        if (index === 0 || index === 1)
                                            return (
                                                <PrimaryTableBodyCell align="left">
                                                    {data}
                                                </PrimaryTableBodyCell>
                                            );
                                        else
                                            return (
                                                <TableBodyCell align="left">
                                                    {data}
                                                </TableBodyCell>
                                            );
                                    })}
                                    <TableBodyCell align="left">
                                        <NavIcon src={InvoiceIcon} style={{}}/>
                                    </TableBodyCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </StyledTable>
                </StyledTableContainerVersion>
            </ColumnContainer>
        </WhiteCard>
    );
}

export default inject("store")(observer(withTheme(PaymentScreen)));