import React, {useState} from "react";
import {inject, observer} from "mobx-react";
import styled, {withTheme} from "styled-components";
import {GlobalProps} from "../main/App";
import * as Yup from "yup";
import {Form, Formik} from "formik";
import FormText from "../../components/FormText/FormText";
import {ColumnContainer, RowContainer, SpaceX, SpaceY} from "../../utils/globals";
import CustomButton from "../../components/CustomButton/CustomButton";
import {AiOutlineCloudUpload} from 'react-icons/ai';
import FileUpload from "../../components/FileUpload/FileUpload";
import CustomTypography from "../../components/CustomTypography/CustomTypography";
import FormLabel from "../../components/FormLabel/FormLabel";

interface Props extends GlobalProps {
    appOption: "Category" | "Poster" | "Tag",
    cancelFunction: () => void,
}


const Container = styled.div`
  padding: 2rem;
  background-color: ${(props: any) => props.theme.colors.lightBackgroundColor};
  height: 100%;
`;

const ColumnContainerVersion = styled(ColumnContainer)`
  height: 100%;
  justify-content: space-between;

`;

const RowContainerVersion = styled(RowContainer)`
  justify-content: end;
  max-height: 3rem;
  margin-bottom: 4rem;
`;

const UploadContainer = styled.div`
  padding: 4rem;
  background-color: ${(props: any) => props.theme.colors.uploadBackgroundColor};
  text-align: center;
  stroke-opacity: 75%;
  border: 1px dashed #727CA4;
  border-radius: 8px;
`;

const RowContainerVersion1 = styled(RowContainer)`
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;


const AppOptionDialog: React.FC<Props> = (props) => {
    const store = props.store!.optionStore!;
    const [file, setFile] = useState();

    return (
        <ColumnContainerVersion>
            <Container>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        name: "",
                        file: "",
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().required("Field is required"),
                        file: Yup.string().required("Field is required"),
                    })}
                    onSubmit={async values => {
                        try {
                            const body = {
                                "name": values.name,
                            };
                            switch (props.appOption) {
                                case "Category":
                                    await store.createCategory(body, file!);
                                    break;
                                case "Poster":
                                    await store.createPoster(body, file!);
                                    break;
                                case "Tag":
                                    await store.createTag(body);
                                    break;
                            }
                            props.cancelFunction();

                        } catch (e: any) {
                            alert(e.message);
                        }
                    }}>
                    {(formikProps) => (
                        <Form style={{
                            height: "100%",
                        }}>
                            <ColumnContainerVersion>
                                <div>
                                    <FormText
                                        id={"name"}
                                        name={"name"}
                                        onChange={formikProps.handleChange}
                                        value={formikProps.values.name}
                                        placeholder={"Type Here"}
                                        textColor={"red"}
                                        error={
                                            formikProps.touched.name && formikProps.errors.name
                                        }
                                        label={props.appOption + " Name"}/>
                                    <SpaceY height={"1rem"}/>
                                    <FormLabel labelText={"Attach File*"} size={"bold"}/>
                                    <UploadContainer>
                                        <FileUpload child={
                                            <RowContainerVersion1>
                                                <AiOutlineCloudUpload size={"1.5rem"}/>
                                                <SpaceX width={"0.5rem"}/>
                                                <CustomTypography
                                                    variant="body1"
                                                    color={props.theme.colors.blackColorOpacity5}
                                                    textAlign={"center"}
                                                >
                                                    Drop files here or click to upload
                                                </CustomTypography>
                                            </RowContainerVersion1>
                                        } onSelect={(data: any) => {
                                            formikProps.values.file = data.name;
                                            setFile(data);
                                        }}/>
                                    </UploadContainer>
                                    <SpaceY height={"1rem"}/>
                                    {file != undefined ? <>
                                        <FormLabel labelText={formikProps.values.file} size={"bold"}/>
                                        <SpaceY height={"1rem"}/>
                                    </> : <></>}
                                    <FormText
                                        id={"file"}
                                        name={"file"}
                                        onChange={formikProps.handleChange}
                                        value={formikProps.values.file}
                                        placeholder={"Type Here"}
                                        textColor={"red"}
                                        error={
                                            formikProps.touched.file && formikProps.errors.file
                                        }
                                        display={"none"}
                                        label={props.appOption + " Name"}/>

                                </div>

                                <RowContainerVersion>
                                    <CustomButton
                                        type="button"
                                        variant={"outlined"}
                                        // backgroundColor={theme.colors.surfSideRedColor}
                                        // textColor={theme.colors.whiteColor}
                                        borderRadius="0"
                                        onClick={props.cancelFunction}
                                    >
                                        Cancel
                                    </CustomButton>
                                    <SpaceX width={"1rem"}/>
                                    <CustomButton
                                        type="submit"
                                        borderRadius="0"
                                        isSubmitting={formikProps.isSubmitting}
                                        disabled={formikProps.isSubmitting}
                                    >
                                        Save
                                    </CustomButton>
                                </RowContainerVersion>
                            </ColumnContainerVersion>
                        </Form>
                    )}
                </Formik>
            </Container>
        </ColumnContainerVersion>
    );
}

export default inject("store")(withTheme(observer(AppOptionDialog)));
