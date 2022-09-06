import React from "react";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";
import {ColumnContainer} from "../../utils/globals";

interface Props {}

const MainContainer = styled(ColumnContainer)`
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-y: hidden;
`;

const Loader: React.FC<Props> = (props: Props) => (
  <MainContainer>
    <CircularProgress size={40} thickness={4} color="secondary" />
  </MainContainer>
);

export default Loader;
