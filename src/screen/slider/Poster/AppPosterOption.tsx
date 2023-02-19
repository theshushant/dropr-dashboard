import {inject, observer} from "mobx-react";
import styled, {withTheme} from "styled-components";
import {GlobalProps} from "../../main/App";
import React, {useEffect, useState} from "react";
import {
    ColumnContainer, PointerProvider, PrimaryTableBodyCell,
    RowContainer,
    StyledTable,
    StyledTableContainer,
    StyledTableRow, TableBodyCell,
    TableHeadCell
} from "../../../utils/globals";
import {TableBody, TableHead} from "@material-ui/core";
import CustomButton from "../../../components/CustomButton/CustomButton";
import {RiDeleteBinLine} from 'react-icons/ri';
import Loader from "../../../components/Loader/Loader";
import SlidingChild from "../../../components/SlidingChild/SlidingChild";
import AppOptionDialog from "../AppOptionDialog";
import AddIcon from "../../../assets/add.svg";


const headings = [
    "Name", "Icon", "Created At", "Is Active", "Actions"
];

const RowContainerVersion = styled(RowContainer)`
  flex-grow: 0;
  justify-content: end;
  padding: 1rem 2rem;
`;

const WhiteCard = styled.div`
  background-color: ${props => props.theme.colors.whiteColor};
`;

const NavIcon = styled.img`
  height: 2.5rem;
`;

const  StyledTableContainerVersion = styled(StyledTableContainer)`
  max-height: 75vh;
`;

const AppPosterOptionScreen: React.FC<GlobalProps> = (props) => {
    const store = props.store!.optionStore!;
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!store.isLoading && store.posters.length < 1) {
            store.fetchPosters();
        }
    }, [store]);

    if (store?.isLoading && store.posters.length < 1) {
        return (
            <Loader/>
        );
    }
    return (
        <>
            <WhiteCard>
                <ColumnContainer>
                    <RowContainerVersion>
                        <CustomButton
                            type="submit"
                            borderRadius="0"
                            width={"20rem"}
                            onClick={() => setOpen(true)}
                            icon={AddIcon}
                        >
                            Add Poster
                        </CustomButton>
                    </RowContainerVersion>
                    {store.posters.length < 1
                        ? (<></>)
                        : (<StyledTableContainerVersion>
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
                                    {store.posters.map(poster => (
                                        <StyledTableRow key={poster.id}>
                                            <TableBodyCell align="left">
                                                {poster.name}
                                            </TableBodyCell>
                                            <TableBodyCell align="left">
                                                <NavIcon src={poster.url}/>
                                            </TableBodyCell>
                                            <TableBodyCell align="left">
                                                {poster.created_at.toString()}
                                            </TableBodyCell>
                                            <TableBodyCell align="left">
                                                {poster.is_active ? "Yes" : "No"}
                                            </TableBodyCell>
                                            <TableBodyCell align="left">
                                                <PointerProvider onClick={() => {
                                                    try {
                                                        store.deletePoster(poster.id);
                                                    } catch (e) {

                                                    }
                                                }}>
                                                    <RiDeleteBinLine/>
                                                </PointerProvider>
                                            </TableBodyCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </StyledTable>
                        </StyledTableContainerVersion>)}
                </ColumnContainer>
            </WhiteCard>
            {open && <SlidingChild isOpen={open}>
                <AppOptionDialog
                    appOption={"Poster"}
                    cancelFunction={() => {
                        setOpen(false);
                    }}/>
            </SlidingChild>}
        </>
    );
}

export default inject("store")(withTheme(observer(AppPosterOptionScreen)));