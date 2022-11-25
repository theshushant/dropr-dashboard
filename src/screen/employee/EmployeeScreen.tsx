import {inject, observer} from "mobx-react";
import styled, {withTheme} from "styled-components";
import {GlobalProps} from "../main/App";
import React, {useEffect} from "react";
import {
    ColumnContainer, FlexContainer,
    RowContainer,
    StyledTable,
    StyledTableContainer,
    StyledTableRow, TableBodyCell,
    TableHeadCell
} from "../../utils/globals";
import SearchField from "../../components/CustomSearchBar/SearchField";
import CustomButton from "../../components/CustomButton/CustomButton";
import {TableBody, TableHead} from "@material-ui/core";
import {useNavigate} from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const headings = [
    "Id", "Username", "Name", "Email", "Phone Number", "Role", "Is Email Verified", "is Phone Verified", "Created At"
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

const StyledTableRowVersion = styled(StyledTableRow)`
cursor: pointer;
`;

const  StyledTableContainerVersion = styled(StyledTableContainer)`
  height: 70vh;
`;


const EmployeeScreen: React.FC<GlobalProps> = (props) => {
    const navigate = useNavigate();
    const store = props.store!.employeeStore;


    useEffect(() => {
        if (!store.isLoading && store.employees.length < 1) {
            store.fetchEmployees();
        }
    }, [store]);

    if (store.isLoading) {
        return (<Loader/>);
    }

    return (
        <WhiteCard key={"EmployeeScreen"}>
            <ColumnContainer>
                <RowContainerVersion>
                    <SearchField
                        placeholder={"Type here"}
                        onSubmit={() => {
                        }}
                    />
                    <FlexContainer flex={2}/>
                    <CustomButton
                        type="submit"
                        borderRadius="0"
                        width={"20rem"}
                        variant={"outlined"}
                        onClick={() => navigate('/create-employee')}
                    >
                        Create Employee
                    </CustomButton>
                </RowContainerVersion>
                {store.employees.length < 1
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
                                {store.employees.map(row => (
                                    <StyledTableRowVersion key={row.id.toString()} onClick={
                                        ()=>{
                                            navigate("/employee/"+row.id);
                                        }
                                    }>
                                        <TableBodyCell align="left">
                                            {row.id}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {row.email ?? "-"}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {row.name}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {row.email ?? "-"}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {row.phone_number ?? "-"}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {row.role}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {row.is_email_verified ? "Yes" : "No"}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {row.is_phone_verified ? "Yes" : "No"}
                                        </TableBodyCell>
                                        <TableBodyCell align="left">
                                            {row.created_at.toString()}
                                        </TableBodyCell>
                                    </StyledTableRowVersion>
                                ))}
                            </TableBody>
                        </StyledTable>
                    </StyledTableContainerVersion>)}
            </ColumnContainer>
        </WhiteCard>
    );
}

export default inject("store")(withTheme(observer(EmployeeScreen)));