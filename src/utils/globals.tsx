import styled from "styled-components";
import {Link} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {Table, TableCell, TableContainer, TableRow} from "@material-ui/core";

interface FlexProps {
    flex: number;
}

const FlexContainer = styled.div<FlexProps>`
  flex: ${(props: any) => props.flex};
`;

interface SpaceYProps {
    height: string;
}

const SpaceY = styled.div<SpaceYProps>`
  height: ${(props: any) => props.height};
`;

interface SpaceXProps {
    width: string;
}

const SpaceX = styled.div<SpaceXProps>`
  width: ${(props: any) => props.width};
`;

const Divider = styled.div`
  width: 100%;
  height: 0.125rem;
  background-color: ${(props: any) => props.theme.colors.blackColorOpacity2};
  margin: 1.25rem 0;
`;

const ManageNewComponents = styled.div`
  flex: 4;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  cursor: pointer;
  width: max-content;
`;

const PointerProvider = styled.div`
  cursor: pointer;
`;

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  position: relative;
`;

const ColumnContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SearchContainer = styled(ColumnContainer)`
  width: 16.25rem;
  padding: 0 0 0 1.25rem;
`;

const FullPageContainer = styled.div`
  text-align: center;
  background-color: ${(props: any) => props.theme.colors.whiteColor};
  width: 100vw;
  height: 100vh;
  display: flex;
  user-select: none;
`;

const AlignCenter = styled.div`
  text-align: center;
  align-self: center;
`;

const StyledToastContainer = styled(ToastContainer).attrs({})`
  .Toastify__toast--error {
    background-color: ${props => props.theme.colors.surfSideRedColor};
    font-size: 1rem;
    padding: 0.625rem 0.9375rem;
  }

  .Toastify__toast--success {
    font-size: 1rem;
    padding: 0.625rem 0.9375rem;
  }
`;

const NoScrollContainer = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
`;

const StyledTable = styled(Table)`
  border-collapse: separate;
  border-spacing: 0 0.625rem;
`;

const StyledTableContainer = styled(TableContainer)`
  overflow-y: scroll;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props: any) => props.theme.colors.primaryColor};
    border-radius: 0.625rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(16, 193, 206, 0.7);
  }
`;

const TableHeadCell = styled(TableCell)`
  height: 3.125rem;
  font-size: 1.125rem;
  box-shadow: none;
  border: none;
  color: ${(props: any) => props.theme.colors.blackColor};
  background-color: ${(props: any) => props.theme.colors.secondaryColor};
  font-weight: bold;
  padding: 0 1rem;
`;

const TableBodyCell = styled(TableCell)`
  height: 3.125rem;
  font-size: 1.125rem;
  box-shadow: none;
  border: none;
  background-color: ${(props: any) => props.theme.colors.whiteColor};
  padding: 0 1rem;
`;

const PrimaryTableBodyCell = styled(TableBodyCell)`
  color: ${props => props.theme.colors.primaryColor};
`;

const SuccessTableBodyCell = styled(TableBodyCell)`
  color: ${props => props.theme.colors.successColor};
`;

const GreyTableBodyCell = styled(TableBodyCell)`
  background-color: ${(props: any) => props.theme.colors.greyLightColor};
`;

const StyledTableRow = styled(TableRow)`
  ${TableHeadCell}:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  ${TableHeadCell}:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
  }

  ${TableBodyCell}:first-child {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  ${TableBodyCell}:last-child {
    border-radius: 0 0.5rem 0.5rem 0;
  }

`;

const Warning = styled.span`
  font-size: 3.5rem;
  margin-right: 1rem;
  font-weight: 800;
  color: ${(props: any) => props.theme.colors.orangeColor}
}

;
`;

const capitalize = (name: string) => {
    name = name?.split("")[0].toUpperCase() + name?.substr(1);
    return name;
};

export {
    SpaceX,
    Divider,
    SpaceY,
    ManageNewComponents,
    StyledLink,
    RowContainer,
    ColumnContainer,
    SearchContainer,
    FullPageContainer,
    StyledToastContainer,
    StyledTable,
    StyledTableContainer,
    TableHeadCell,
    TableBodyCell,
    GreyTableBodyCell,
    StyledTableRow,
    FlexContainer,
    Warning,
    capitalize,
    AlignCenter,
    NoScrollContainer,
    PrimaryTableBodyCell,
    SuccessTableBodyCell,
    PointerProvider
};
