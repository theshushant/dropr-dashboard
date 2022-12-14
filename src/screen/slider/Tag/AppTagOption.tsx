import {inject, observer} from "mobx-react";
import styled, {withTheme} from "styled-components";
import {GlobalProps} from "../../main/App";
import React, {useEffect, useState} from "react";
import {
    ColumnContainer, PointerProvider,
    RowContainer,
    StyledTable,
    StyledTableContainer,
    StyledTableRow, TableBodyCell,
    TableHeadCell
} from "../../../utils/globals";
import {TableBody, TableHead} from "@material-ui/core";
import CustomButton from "../../../components/CustomButton/CustomButton";
import {RiDeleteBinLine} from 'react-icons/ri';
import SlidingChild from "../../../components/SlidingChild/SlidingChild";
import AppOptionDialog from "../AppOptionDialog";
import Loader from "../../../components/Loader/Loader";
import AddIcon from "../../../assets/add.svg";


const headings = [
    "Name", "Created At", "Is Active", "Actions"
];

const RowContainerVersion = styled(RowContainer)`
  flex-grow: 0;
  justify-content: end;
  padding: 1rem 2rem;
`;

const WhiteCard = styled.div`
  background-color: ${props => props.theme.colors.whiteColor};
`;


const AppTagOptionScreen: React.FC<GlobalProps> = (props) => {
    const store = props.store!.optionStore!;
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (!store.isLoading && store.tags.length < 1) {
            store.fetchTags();
        }
    }, [store]);

    if (store?.isLoading && store.tags.length<1) {
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
                            Add Tag
                        </CustomButton>
                    </RowContainerVersion>
                    {store.tags.length < 1
                        ? (<></>)
                        : (<StyledTableContainer>
                            <StyledTable>
                                <TableHead>
                                    <StyledTableRow>
                                        {headings.map((heading,index) => (
                                            <TableHeadCell  key={heading+index} align="left" >
                                                {heading}
                                            </TableHeadCell>
                                        ))}
                                    </StyledTableRow>
                                </TableHead>
                                <TableBody>
                                    {store.tags.map((tag)=>(
                                        <StyledTableRow key={tag.id}>
                                            <TableBodyCell align="left">
                                                {tag.name}
                                            </TableBodyCell>
                                            {/*<TableBodyCell align="left">*/}
                                            {/*    <NavIcon src={tag.url}/>*/}
                                            {/*</TableBodyCell>*/}
                                            <TableBodyCell align="left">
                                                {tag.created_at.toString()}
                                            </TableBodyCell>
                                            <TableBodyCell align="left">
                                                {tag.is_active ? "Yes" : "No"}
                                            </TableBodyCell>
                                            <TableBodyCell align="left">
                                                <PointerProvider onClick={async () => {
                                                    try {
                                                        await store.deleteTag(tag.id);
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
                        </StyledTableContainer>)}
                </ColumnContainer>
            </WhiteCard>
            {open && <SlidingChild isOpen={open}>
                <AppOptionDialog
                    appOption={"Tag"}
                    cancelFunction={() => {
                        setOpen(false);
                    }}/>
            </SlidingChild>}
        </>
    );
}

export default inject("store")(withTheme(observer(AppTagOptionScreen)));