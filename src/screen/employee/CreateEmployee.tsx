import {inject, observer} from "mobx-react";
import styled, {withTheme} from "styled-components";
import {GlobalProps} from "../main/App";
import React, {useState} from "react";
import CustomGreyBgCard from "../../components/CustomGreyBgCard/CustomGreyBgCard";
import {ColumnContainer, FlexContainer, RowContainer, SpaceX, SpaceY} from "../../utils/globals";
import {Form, Formik} from "formik";
import FormText from "../../components/FormText/FormText";
import * as Yup from "yup";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomTypography from "../../components/CustomTypography/CustomTypography";
import ChangePhoto from "../../components/ChangePhoto/ChangePhoto";
import ToggleSwitch from "../../components/ToggleButton/ToggleButton";
import {useNavigate} from "react-router-dom";
import FileUpload from "../../components/FileUpload/FileUpload";
import {IoMdAttach} from 'react-icons/io';


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


const CreateEmployee: React.FC<GlobalProps> = (props) => {

    const {theme} = props;
    const store = props.store?.employeeStore!;
    const navigate = useNavigate();
    const [driverLicense, setDriverLicenseFile] = useState();
    const [registrationCertificate, setRegistrationCertificateFile] = useState();
    const [vehiclePlateNumber, setVehiclePlateNumberFile] = useState();

    return (
        <Formik
            enableReinitialize={true}
            initialValues={{
                email: "",
                phoneNumber: "",
                role: "EMPLOYEE",
                isActive: true,
                username: "",
                firstname: "",
                lastname: "",
                driverLicense: "",
                registrationCertificate: "",
                vehiclePlateNumber: "",
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email("Invalid Email")
                    .required("Field is required"),
                firstname: Yup.string().required("Field is required"),
                username: Yup.string().required("Field is required"),
                phoneNumber: Yup.string().required("Field is required"),
                driverLicense: Yup.string().required("Field is required"),
                registrationCertificate: Yup.string().required("Field is required"),
                vehiclePlateNumber: Yup.string().required("Field is required"),
            })}
            onSubmit={async values => {
                try {
                    const name = values.firstname + values.lastname;
                    console.log(values.isActive)

                    await store.createEmployee({
                        "name": name,
                        "email": values.email,
                        "is_active": values.isActive,
                        "phone_number": values.phoneNumber,
                        "role": values.role,
                    }, driverLicense!, registrationCertificate!, vehiclePlateNumber!);

                    navigate("/employees");
                } catch (e: any) {
                    console.log("here error is this ", e);
                    alert(e.message);
                }
            }}>
            {(formikProps) => (
                <Form>
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
                                        New Employee Information
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
                                    <FormText
                                        id={"role"}
                                        name={"role"}
                                        onChange={formikProps.handleChange}
                                        value={formikProps.values.role}
                                        placeholder={"Type Here"}
                                        textColor={"red"}
                                        error={
                                            formikProps.touched.role && formikProps.errors.role
                                        }
                                        label={"Role"}/>
                                    <FormText
                                        id={"isActive"}
                                        name={"isActive"}
                                        onChange={formikProps.handleChange}
                                        placeholder={"In Active"}
                                        value={""}
                                        textColor={"red"}
                                        error={
                                            formikProps.touched.isActive && formikProps.errors.isActive
                                        }
                                        label={"Is Active?"}
                                        disabled={true}
                                        iconChild={<ToggleSwitch isActive={formikProps.values.isActive}
                                                                 onchange={(value: boolean) => {
                                                                     formikProps.values.isActive = value;
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
                                            New Employee Personal Information
                                        </CustomTypography>
                                        <SpaceY height={"2rem"}/>
                                        <RowContainer>
                                            <ColumnContainer>
                                                <FormText
                                                    id={"firstname"}
                                                    name={"firstname"}
                                                    onChange={formikProps.handleChange}
                                                    value={formikProps.values.firstname}
                                                    placeholder={"Type Here"}
                                                    textColor={"red"}
                                                    error={
                                                        formikProps.touched.firstname && formikProps.errors.firstname
                                                    }
                                                    label={"First Name"}/>
                                                <FormText
                                                    id={"email"}
                                                    name={"email"}
                                                    onChange={formikProps.handleChange}
                                                    value={formikProps.values.email}
                                                    placeholder={"Type Here"}
                                                    textColor={"red"}
                                                    error={
                                                        formikProps.touched.email && formikProps.errors.email
                                                    }
                                                    label={"Email"}/>
                                                <FormText
                                                    id={"driverLicense"}
                                                    name={"driverLicense"}
                                                    onChange={formikProps.handleChange}
                                                    value={formikProps.values.driverLicense}
                                                    placeholder={"Type Here"}
                                                    textColor={"red"}
                                                    disabled={true}
                                                    showError={true}
                                                    iconChild={<FileUpload onSelect={(file: any) => {
                                                        console.log(file.name, file.type, file.size);
                                                        formikProps.values.driverLicense = file.name;
                                                        setDriverLicenseFile(file);
                                                    }} child={<IoMdAttach size={"1.5rem"} onClick={() => {
                                                    }}/>}/>}
                                                    error={
                                                        formikProps.touched.driverLicense && formikProps.errors.driverLicense
                                                    }
                                                    label={"Driver’s License"}/>
                                                <FormText
                                                    id={"registrationCertificate*"}
                                                    name={"registrationCertificate"}
                                                    onChange={formikProps.handleChange}
                                                    value={formikProps.values.registrationCertificate}
                                                    placeholder={"Type Here"}
                                                    textColor={"red"}
                                                    disabled={true}
                                                    showError={true}
                                                    iconChild={<FileUpload onSelect={(file: any) => {
                                                        console.log(file.name, file.type, file.size);
                                                        formikProps.values.registrationCertificate = file.name;
                                                        setRegistrationCertificateFile(file);
                                                    }} child={<IoMdAttach size={"1.5rem"} onClick={() => {
                                                    }}/>}/>}
                                                    error={
                                                        formikProps.touched.registrationCertificate && formikProps.errors.registrationCertificate
                                                    }
                                                    label={"Registration Certificate"}/>
                                                <FormText
                                                    id={"vehiclePlateNumber"}
                                                    name={"vehiclePlateNumber"}
                                                    onChange={formikProps.handleChange}
                                                    value={formikProps.values.vehiclePlateNumber}
                                                    placeholder={"Type Here"}
                                                    textColor={"red"}
                                                    disabled={true}
                                                    showError={true}
                                                    iconChild={<FileUpload onSelect={(file: any) => {
                                                        console.log(file.name, file.type, file.size);
                                                        formikProps.values.vehiclePlateNumber = file.name;
                                                        setVehiclePlateNumberFile(file);
                                                        console.log(formikProps.values.vehiclePlateNumber);
                                                    }} child={<IoMdAttach size={"1.5rem"} onClick={() => {
                                                    }}/>}/>}
                                                    error={
                                                        formikProps.touched.vehiclePlateNumber && formikProps.errors.vehiclePlateNumber
                                                    }
                                                    label={"Vehicle Plate Number"}/>
                                            </ColumnContainer>
                                            <SpaceX width={"4rem"}/>
                                            <ColumnContainer>
                                                <FormText
                                                    id={"lastname"}
                                                    name={"lastname"}
                                                    onChange={formikProps.handleChange}
                                                    value={formikProps.values.lastname}
                                                    placeholder={"Type Here"}
                                                    textColor={"red"}
                                                    error={
                                                        formikProps.touched.lastname && formikProps.errors.lastname
                                                    }
                                                    label={"Last Name"}/>
                                                <FormText
                                                    id={"phoneNumber"}
                                                    name={"phoneNumber"}
                                                    onChange={formikProps.handleChange}
                                                    value={formikProps.values.phoneNumber}
                                                    placeholder={"Type Here"}
                                                    textColor={"red"}
                                                    error={
                                                        formikProps.touched.phoneNumber && formikProps.errors.phoneNumber
                                                    }
                                                    label={"Phone Number"}/>

                                                <NavIcon src={vehiclePlateNumber}/>
                                            </ColumnContainer>
                                        </RowContainer>
                                    </ColumnContainerVersion>
                                    <RowContainerVersion2>
                                        <CustomButton
                                            borderRadius="0"
                                            variant={"outlined"}
                                            onClick={() => {
                                                navigate(
                                                    "/employees"
                                                );
                                            }}
                                            type={"button"}
                                        >
                                            Cancel
                                        </CustomButton>
                                        <SpaceX width={"2rem"}/>
                                        <CustomButton
                                            type="submit"
                                            borderRadius="0"
                                            isSubmitting={formikProps.isSubmitting}
                                            disabled={formikProps.isSubmitting}
                                        >
                                            Create Employee
                                        </CustomButton>
                                    </RowContainerVersion2>
                                </ColumnContainerVersion>
                            </CustomGreyBgCard>
                        </FlexContainer>
                    </RowContainerVersion>
                </Form>
            )}
        </Formik>
    );
}

export default inject("store")(observer(withTheme(CreateEmployee)));