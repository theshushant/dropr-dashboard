import React from "react";
import styled, { withTheme } from "styled-components";
import {GlobalProps} from "../main/App";
import CustomTypography from "../../components/CustomTypography/CustomTypography";
import {FullPageContainer} from "../../utils/globals";

interface Props extends GlobalProps {}

const MainContainer = styled(FullPageContainer)`
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.whiteColor};
  flex-direction: column;
`;

const NoMatchRoute: React.FC<Props> = (props: Props) => {
  const { theme } = props;

  return (
    <MainContainer>
      <CustomTypography variant="h1" color={theme.colors.primaryColor}>
        404
      </CustomTypography>
      <CustomTypography variant="h3" color={theme.colors.primaryColor}>
        {"Oops, the page you're looking for doesn't exist."}
      </CustomTypography>
    </MainContainer>
  );
};

export default withTheme(NoMatchRoute);
