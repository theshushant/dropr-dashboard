import React, {ReactNode} from 'react';
import styled from "styled-components";

interface Props {
    children: ReactNode,
    isOpen: boolean,
}

const SlideOpenContainer = styled.div`
  height: 100%;
  background: white;
  position: fixed;
  top: 5rem;
  right: 0;
  z-index: 200;
  box-shadow: 1px 0 7px rgba(0, 0, 0, 0.5);
  transition: transform 0.5s ease-out;
`;

const BackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  top: 0;
  right: 0;
`;

const SlidingChild: React.FC<Props> = (props) => {
    const  style = {
        transform: props.isOpen?"translateX(0%)":"translateX(100%)",
    };

    return (
        <SlideOpenContainer style={style}>
            {props.children}
        </SlideOpenContainer>
    );
}

export default SlidingChild;