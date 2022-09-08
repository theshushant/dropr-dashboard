import React from "react";
import styled from "styled-components";
import LoginContainerImage from "../../assets/LoginContainerImage.svg";


const ImageContainerWrapper = styled.div`
  flex: 2;
  background-color: green;
  alignment: center;
`;

const ImageContainer = styled.div`
  background-image: url(${LoginContainerImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;
`;


const LoginImageContainer: React.FC = () => {
    return <ImageContainerWrapper>
        <ImageContainer/>
    </ImageContainerWrapper>
};

export default LoginImageContainer;