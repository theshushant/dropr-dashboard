import {inject, observer} from "mobx-react";
import styled, {withTheme} from "styled-components";
import {GlobalProps} from "../main/App";
import React, {useEffect, useState} from "react";
import CustomGreyBgCard from "../../components/CustomGreyBgCard/CustomGreyBgCard";
import {ColumnContainer, FlexContainer, PointerProvider, RowContainer, SpaceX, SpaceY} from "../../utils/globals";
import {Form, Formik} from "formik";
import FormText from "../../components/FormText/FormText";
import * as Yup from "yup";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomTypography from "../../components/CustomTypography/CustomTypography";
import ChangePhoto from "../../components/ChangePhoto/ChangePhoto";
import ToggleSwitch from "../../components/ToggleButton/ToggleButton";
import {useNavigate, useParams} from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import {User} from "../../models/user/UserModel";
import {toNumber} from "lodash";


const ColumnContainerVersion = styled(ColumnContainer)`
  justify-content: space-between;
  height: 100%;
`;

const RowContainerVersion = styled(RowContainer)`
  margin-bottom: 2rem;
`;

const RowContainerVersion2 = styled(RowContainer)`
  justify-content: end;
`;

const NavIcon = styled.img`
  height: 2.5rem;
`;


const ViewEmployee: React.FC<GlobalProps> = (props) => {

    const {theme} = props;
    const store = props.store?.employeeStore!;
    const navigate = useNavigate();
    let isActive = true;

    const {employeeId} = useParams();
    const [user, setUser] = useState(new User());
    const [enableEditing, setEnableEditing] = useState(true);

    console.log(employeeId);
    useEffect(() => {
        store.getEmployeeById(toNumber(employeeId)).then((element) => {
            setUser(element)
        });

    }, [employeeId]);

    if (store.isLoading) {
        return (
            <Loader/>
        );
    }

    return (
        <Formik
            enableReinitialize={true}
            initialValues={{
                email: user.email ?? "",
                phoneNumber: user.phone_number ?? "",
                role: user.role ?? "EMPLOYEE",
                isActive: user.is_verified ?? true,
                username: user.name ?? "",
                firstname: user.name?.split(" ") ?? "",
                lastname: user.name?.split(" ").pop() ?? "",
                driverLicense: user.document_urls?.driver_license?.length > 0 ? user.document_urls.driver_license[0] : "",
                registrationCertificate: user.document_urls?.registration_certificate?.length > 0 ? user.document_urls.registration_certificate[0] : "",
                vehiclePlateNumber: user.document_urls?.vehicle_plate?.length > 0 ? user.document_urls.vehicle_plate[0] : "",
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email("Invalid Email")
                    .required("Field is required"),
                firstname: Yup.string().required("Field is required"),
                username: Yup.string().required("Field is required"),
                phoneNumber: Yup.string().required("Field is required"),
            })}
            onSubmit={async values => {
                try {
                    console.log("working this");
                    // await store.createEmployee({
                    //     "name": name,
                    //     "email": values.email,
                    //     "password": "secret",
                    //     "is_active": isActive,
                    //     "phone_number": values.phoneNumber,
                    //     "role": values.role,
                    // });
                } catch (e: any) {
                    alert(e.message);
                }
            }}>
            {(formikProps) => (
                <Form>
                    <PointerProvider onClick={() => {
                        navigate(
                            "/employees"
                        );
                    }
                    }>
                        <CustomTypography
                            variant="body1"
                            fontWeight={"bold"}
                            color={props.theme.colors.blackColorOpacity5}
                        >
                            Back
                        </CustomTypography>
                    </PointerProvider>
                    {enableEditing ? <RowContainerVersion2>
                            <SpaceX width={"2rem"}/>
                            <CustomButton
                                type={"button"}
                                borderRadius="0"
                                onClick={() => {
                                    setEnableEditing(false);
                                }
                                }
                            >
                                Edit
                            </CustomButton>
                        </RowContainerVersion2> :
                        <RowContainerVersion2>
                            <CustomButton
                                type={"button"}
                                borderRadius="0"
                                variant={"outlined"}
                                onClick={() => {
                                    setEnableEditing(true);
                                }
                                }
                            >
                                Cancel
                            </CustomButton>
                            <SpaceX width={"2rem"}/>
                            <CustomButton
                                type="submit"
                                borderRadius="0"
                                isSubmitting={formikProps.isSubmitting}
                                disabled={formikProps.isSubmitting}
                                onClick={async () => {
                                    formikProps.setSubmitting(true);
                                    console.log("working this");
                                    if (user != null) {
                                        const name = formikProps.values.firstname + formikProps.values.lastname;

                                        await store.updateEmployee(
                                            user!.id!,
                                            {
                                                "name": name,
                                                "email": formikProps.values.email,
                                                "is_active": formikProps.values.isActive,
                                                "phone_number": formikProps.values.phoneNumber,
                                                "role": formikProps.values.role,
                                                "document_urls": {
                                                    "driver_license": [formikProps.values.driverLicense],
                                                    "registration_certificate": [formikProps.values.registrationCertificate],
                                                    "vehicle_plate": [formikProps.values.vehiclePlateNumber]
                                                }
                                            },
                                        );
                                    }
                                    formikProps.setSubmitting(false);
                                }
                                }
                            >
                                Save
                            </CustomButton>
                        </RowContainerVersion2>}
                    <SpaceY height={"1rem"}/>
                    <RowContainerVersion>
                        <FlexContainer flex={1}>
                            <CustomGreyBgCard color={props.theme.colors.whiteColor} padding={"2rem 4rem"}>
                                <ColumnContainer>
                                    <CustomTypography
                                        variant="h4"
                                        fontWeight={"bold"}
                                        color={props.theme.colors.blackColorOpacity5}
                                        textAlign={"center"}
                                    >
                                        Employee Information
                                    </CustomTypography>
                                    <SpaceY height={"2rem"}/>
                                    <ChangePhoto
                                        setImageChanged={() => {
                                        }}
                                        theme={theme}
                                        isEditing={false}
                                        setFile={() => {
                                        }}/>
                                    <CustomTypography
                                        variant="h5"
                                        fontWeight={"bold"}
                                        color={props.theme.colors.blackColorOpacity5}
                                        textAlign={"center"}
                                    >
                                        Add Picture
                                    </CustomTypography>
                                    <SpaceY height={"4rem"}/>
                                    <FormText
                                        disabled={enableEditing}
                                        id={"username"}
                                        name={"username"}
                                        onChange={formikProps.handleChange}
                                        value={formikProps.values.username}
                                        placeholder={"Type Here"}
                                        error={
                                            formikProps.touched.username && formikProps.errors.username
                                        }
                                        label={"Username"}/>
                                    <FormText
                                        disabled={enableEditing}
                                        id={"role"}
                                        name={"role"}
                                        onChange={formikProps.handleChange}
                                        value={formikProps.values.role}
                                        placeholder={"Type Here"}
                                        error={
                                            formikProps.touched.role && formikProps.errors.role
                                        }
                                        label={"Role"}/>
                                    <FormText
                                        id={"isActive"}
                                        name={"isActive"}
                                        onChange={formikProps.handleChange}
                                        placeholder={"In Active"}
                                        value={null}
                                        // error={
                                        //     formikProps.touched.isActive && formikProps.errors.isActive
                                        // }
                                        label={"Is Active?"}
                                        disabled={true}
                                        iconChild={<ToggleSwitch isActive={isActive}
                                                                 onchange={(value: boolean) => {
                                                                     isActive = value;
                                                                 }}/>}
                                    />
                                </ColumnContainer>
                            </CustomGreyBgCard>
                        </FlexContainer>
                        <SpaceX width={"4rem"}/>
                        <FlexContainer flex={2}>
                            <CustomGreyBgCard color={props.theme.colors.whiteColor} padding={"2rem 4rem"}>
                                <ColumnContainerVersion>
                                    <ColumnContainerVersion>
                                        <CustomTypography
                                            variant="h4"
                                            fontWeight={"bold"}
                                            color={props.theme.colors.blackColorOpacity5}
                                        >
                                            Personal Information
                                        </CustomTypography>
                                        <SpaceY height={"2rem"}/>
                                        <RowContainer>
                                            <ColumnContainer>
                                                <FormText
                                                    disabled={enableEditing}
                                                    id={"firstname"}
                                                    name={"firstname"}
                                                    onChange={formikProps.handleChange}
                                                    value={formikProps.values.firstname}
                                                    placeholder={"Type Here"}
                                                    // error={
                                                    //     formikProps.touched.firstname && formikProps.errors.firstname
                                                    // }
                                                    label={"First Name"}/>
                                                <FormText
                                                    disabled={enableEditing}
                                                    id={"email"}
                                                    name={"email"}
                                                    onChange={formikProps.handleChange}
                                                    value={formikProps.values.email}
                                                    placeholder={"Type Here"}
                                                    error={
                                                        formikProps.touched.email && formikProps.errors.email
                                                    }
                                                    label={"Email"}/>
                                                <FormText
                                                    disabled={enableEditing}
                                                    id={"driverLicense"}
                                                    name={"driverLicense"}
                                                    onChange={formikProps.handleChange}
                                                    value={formikProps.values.driverLicense}
                                                    placeholder={"Type Here"}
                                                    // error={
                                                    //     formikProps.touched.username && formikProps.errors.username
                                                    // }
                                                    label={"Driver’s License"}/>
                                                <FormText
                                                    disabled={enableEditing}
                                                    id={"registrationCertificate*"}
                                                    name={"registrationCertificate"}
                                                    onChange={formikProps.handleChange}
                                                    value={formikProps.values.registrationCertificate}
                                                    placeholder={"Type Here"}
                                                    // error={
                                                    //     formikProps.touched.username && formikProps.errors.username
                                                    // }
                                                    label={"Registration Certificate"}/>
                                                <FormText
                                                    disabled={enableEditing}
                                                    id={"vehiclePlateNumber"}
                                                    name={"vehiclePlateNumber"}
                                                    onChange={formikProps.handleChange}
                                                    value={formikProps.values.vehiclePlateNumber}
                                                    placeholder={"Type Here"}
                                                    // error={
                                                    //     formikProps.touched.username && formikProps.errors.username
                                                    // }
                                                    label={"Vehicle Plate Number"}/>
                                            </ColumnContainer>
                                            <SpaceX width={"4rem"}/>
                                            <ColumnContainer>
                                                <FormText
                                                    disabled={enableEditing}
                                                    id={"lastname"}
                                                    name={"lastname"}
                                                    onChange={formikProps.handleChange}
                                                    value={formikProps.values.lastname}
                                                    placeholder={"Type Here"}
                                                    error={
                                                        formikProps.touched.lastname && formikProps.errors.lastname
                                                    }
                                                    label={"Last Name"}/>
                                                <FormText
                                                    disabled={enableEditing}
                                                    id={"phoneNumber"}
                                                    name={"phoneNumber"}
                                                    onChange={formikProps.handleChange}
                                                    value={formikProps.values.phoneNumber}
                                                    placeholder={"Type Here"}
                                                    error={
                                                        formikProps.touched.phoneNumber && formikProps.errors.phoneNumber
                                                    }
                                                    label={"Phone Number"}/>

                                                <NavIcon src={formikProps.values.driverLicense}/>
                                                <NavIcon src={formikProps.values.registrationCertificate}/>
                                                <NavIcon src={formikProps.values.vehiclePlateNumber}/>
                                            </ColumnContainer>
                                        </RowContainer>
                                    </ColumnContainerVersion>
                                </ColumnContainerVersion>
                            </CustomGreyBgCard>
                        </FlexContainer>
                    </RowContainerVersion>
                </Form>
            )}
        </Formik>
    );
}

export default inject("store")(withTheme(observer(ViewEmployee)));