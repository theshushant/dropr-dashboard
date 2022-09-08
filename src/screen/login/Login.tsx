import React from "react";
import {FlexContainer, FullPageContainer, RowContainer} from "../../utils/globals";
import CustomTypography from "../../components/CustomTypography/CustomTypography";
import {inject, observer} from "mobx-react";
import {withTheme} from "styled-components";
import {GlobalProps} from "../main/App";
import LoginImageContainer from "./LoginImageContainer";
import FormText from "../../components/FormText/FormText";

interface Props extends GlobalProps {
}

const Login: React.FC<Props> = (props) => {
    return <FullPageContainer>
        <RowContainer>
            <FlexContainer flex={1}>
                <CustomTypography
                    variant="h4"
                    fontWeight={"normal"}
                    color={props.theme.colors.primaryColor}
                >
                    Logistic operation management portal
                </CustomTypography>
                <FormText id={"ma,e"} name={"user"} onChange={(value) => {
                }} value={""} textColor={"red"}/>
                <FormText id={"ma,e"} name={"user"} onChange={() => {
                }} value={""} textColor={"red"}/>

            </FlexContainer>
            <LoginImageContainer/>
        </RowContainer>
    </FullPageContainer>
};

export default inject("store")(observer(withTheme(Login)));