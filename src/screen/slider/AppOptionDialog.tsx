import React from "react";
import {inject, observer} from "mobx-react";
import styled, {withTheme} from "styled-components";
import {GlobalProps} from "../main/App";
import * as Yup from "yup";
import {Form, Formik} from "formik";
import FormText from "../../components/FormText/FormText";
import {ColumnContainer, FlexContainer, RowContainer, SpaceX, SpaceY} from "../../utils/globals";
import CustomButton from "../../components/CustomButton/CustomButton";

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

const AppOptionDialog: React.FC<Props> = (props) => {
    const store = props.store!.optionStore!;
    const {theme} = props;

    return (
        <ColumnContainerVersion>

            <Container>
                <Formik
                    initialValues={{
                        name: "",
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().required("Field is required"),
                    })}
                    onSubmit={async values => {
                        try {
                            const body = {
                                "name": values.name,
                                "url": "https://cdn-images-1.medium.com/max/1200/1*Zkhl4Zz43z2_iR_ADlP-rg.png",
                            };
                            switch (props.appOption) {
                                case "Category":
                                    await store.createCategory(body);
                                    break;
                                case "Poster":
                                    await store.createPoster(body);
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
                                   label={props.appOption+" Name"}/>
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
