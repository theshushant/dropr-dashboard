import React, {ReactNode} from "react";
import styled from "styled-components";

interface Props {
    isOpen: boolean,
}
const SlideOpenContainer = styled.div`
  height: 100%;
  background: white;
  position: fixed;
  top: 5rem;
  right: 0;
  width: 40%;
  z-index: 200;
  box-shadow: 1px 0 7px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-out;
`;

const SideDrawer: React.FC<Props> = (props) => {
    const  style = {
        transform: props.isOpen?"translateX(100%)":"translateX(100%)",
    };
    return (<SlideOpenContainer style={style}>
Hello
    </SlideOpenContainer>);
};

export default SideDrawer;