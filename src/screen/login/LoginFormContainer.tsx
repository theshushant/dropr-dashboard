import React from "react";
import {GlobalProps} from "../main/App";
import {inject, observer} from "mobx-react";
import styled, {withTheme} from "styled-components";
import {AlignCenter, Divider, FlexContainer, RowContainer, SpaceY, StyledLink} from "../../utils/globals";
import CustomTypography from "../../components/CustomTypography/CustomTypography";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import FormText from "../../components/FormText/FormText";
import CustomButton from "../../components/CustomButton/CustomButton";
import Logo from "../../assets/Logo.svg";
import LabelledCheckBox from "../../components/LabelledCheckBox/LabelledCheckBox";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const FlexContainerLoginVersion = styled(FlexContainer)`
  margin: 0 5rem;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
`;

const ImageContainer = styled.div`
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: contain;
  height: 84px;
  width: 157px;
`;

const HeaderContainer = styled(FlexContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const LoginDivider = styled(Divider)`
  width: 2.5rem;
  background-color: ${props => props.theme.colors.primaryColor};
  height: 0.3rem;
  margin-top: 8px;
`;

const RowContainerVersion = styled(RowContainer)`
  justify-content: space-between;
`;

interface LoginFormikValues {
    username: string,
    password: string,
}

const LoginFormContainer: React.FC<GlobalProps> = (props) => {
    const {theme} = props;
    const store = props.store!.user;
    const [hidePassword, setHidePassword] = React.useState(true);
    const navigate = useNavigate();

    return <FlexContainerLoginVersion flex={1}>
        <HeaderContainer flex={1}>
            <ImageContainer/>
            <SpaceY height="1.5rem"/>
            <AlignCenter>
                <CustomTypography
                    variant="h5"
                    fontWeight={"normal"}
                    color={props.theme.colors.blackColorOpacity5}
                >
                    Logistic operation management portal
                </CustomTypography>
            </AlignCenter>
        </HeaderContainer>
        <CustomTypography
            variant="h4"
            fontWeight={"bold"}
            color={props.theme.colors.disabledBorderColor}
        >
            Log In
        </CustomTypography>
        <LoginDivider/>
        <FlexContainer flex={2}>
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .email("Invalid Email")
                        .required("Field is required"),
                    password: Yup.string().required("Field is required"),
                })}
                onSubmit={async (values: LoginFormikValues) => {
                    try {
                        console.log("here values are these" + values.toString());
                        await store.login(values.username, values.password);
                        if (store.loggedInUser != null) {
                            navigate('/');
                        }

                    } catch (e: any) {
                        console.log(JSON.stringify(e));
                        alert(e.errors);
                    }
                }}>
                {(formikProps) => (
                    <Form
                        autoComplete="off"
                        onSubmit={formikProps.handleSubmit}
                        onReset={formikProps.handleReset}
                    >
                        <FormText
                            id={"username"}
                            name={"username"}
                            onChange={formikProps.handleChange}
                            value={formikProps.values.username}
                            placeholder={"Type Here"}
                            textColor={"red"}
                            error={
                                formikProps.touched.username && formikProps.errors.username
                            }
                            label={"Username"}/>
                        <SpaceY height={"2rem"}/>
                        <RowContainer>
                            <FormText
                                id={"password"}
                                placeholder={"Type Here"}
                                name={"password"}
                                label={"Password"}
                                onChange={formikProps.handleChange}
                                value={formikProps.values.password}
                                type={hidePassword ? "password" : "text"}
                                error={
                                    formikProps.touched.password && formikProps.errors.password
                                }
                                textColor={"red"}
                                iconChild={hidePassword ? <AiOutlineEyeInvisible size={"24"}
                                                                                 onClick={() => setHidePassword(!hidePassword)}/> :
                                    <AiOutlineEye size={"24"} color={theme.colors.primaryColor}
                                                  onClick={() => setHidePassword(!hidePassword)}/>}/>

                        </RowContainer>
                        <SpaceY height="2rem"/>
                        <RowContainerVersion>
                            <LabelledCheckBox label={"Remember me"}/>
                            <CustomTypography
                                variant="h6"
                                fontWeight={"normal"}
                                color={props.theme.colors.primaryColor}
                                textAlign={"right"}
                            >
                                Forgot Password?
                            </CustomTypography>
                        </RowContainerVersion>
                        <SpaceY height="4rem"/>
                        <CustomButton
                            type="submit"
                            backgroundColor={theme.colors.surfSideRedColor}
                            textColor={theme.colors.whiteColor}
                            borderRadius="0"
                            isSubmitting={formikProps.isSubmitting}
                            disabled={formikProps.isSubmitting}
                        >
                            LOGIN
                        </CustomButton>
                    </Form>
                )}
            </Formik>
        </FlexContainer>
    </FlexContainerLoginVersion>;
};

export default inject("store")(observer(withTheme(LoginFormContainer)));