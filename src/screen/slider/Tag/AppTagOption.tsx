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
import {useNavigate} from "react-router-dom";


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

const  StyledTableContainerVersion = styled(StyledTableContainer)`
  max-height: 75vh;
`;

const AppTagOptionScreen: React.FC<GlobalProps> = (props) => {
    const store = props.store!.optionStore!;
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (!store.isLoading && store.tags.length < 1) {
            store.fetchTags().catch(e=>{
                if(e?.errorCode == '703')
                    navigate('/login');
            });
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
                        : (<StyledTableContainerVersion>
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
                                                    } catch (e:any) {
                                                        if(e?.errorCode == '703')
                                                            navigate('/login');
                                                        else
                                                            alert(e.message);
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
                    appOption={"Tag"}
                    cancelFunction={() => {
                        setOpen(false);
                    }}/>
            </SlidingChild>}
        </>
    );
}

export default inject("store")(withTheme(observer(AppTagOptionScreen)));