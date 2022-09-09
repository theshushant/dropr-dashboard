import React from "react";
import {FullPageContainer, RowContainer} from "../../utils/globals";
import {inject, observer} from "mobx-react";
import {withTheme} from "styled-components";
import {GlobalProps} from "../main/App";
import LoginImageContainer from "./LoginImageContainer";
import LoginFormContainer from "./LoginFormContainer";

interface Props extends GlobalProps {
}

const Login: React.FC<Props> = (props) => {
    return <FullPageContainer>
        <RowContainer>
            <LoginFormContainer/>
            <LoginImageContainer/>
        </RowContainer>
    </FullPageContainer>
};

export default inject("store")(observer(withTheme(Login)));