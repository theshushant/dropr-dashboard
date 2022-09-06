import React from "react";
import Loader from "../Loader/Loader";
import {FullPageContainer} from "../../utils/globals";

interface Props {}

const FullScreenLoader: React.FC<Props> = (props: Props) => (
  <FullPageContainer>
    <Loader />
  </FullPageContainer>
);

export default FullScreenLoader;
