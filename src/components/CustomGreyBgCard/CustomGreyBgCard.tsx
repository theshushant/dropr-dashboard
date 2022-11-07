import React from "react";
import styled from "styled-components";


interface Props {
    children: React.ReactNode;
    imageSrc?: string;
    imageAlt?: string;
    id?: string;
    overflowY?:
        | "hidden"
        | "inherit"
        | "auto"
        | "initial"
        | "-moz-initial"
        | "revert"
        | "unset"
        | "scroll"
        | "visible"
        | undefined;
    padding?: string;
    borderRadius?: string;
    color?: string;
}

const Card = styled.div`
  width: 100%;
  flex-grow: 1;
  height: 100%;
  background-color: ${props => props.theme.colors.greyLightColor};
  padding: 2% 5%;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primaryColor};
    border-radius: 0.625rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(16, 193, 206, 0.7);
  }
`;

const CustomGreyBgCard: React.FC<Props> = (props: Props) => {
    const style = {
        overflowY: props.overflowY,
        padding: props.padding,
        borderRadius: props.borderRadius,
        backgroundColor:props.color,
    };
    return (
        <Card id={props.id} style={style}>
            {props.children}
            {/*{props.imageSrc && (*/}
            {/*    <WaterMarkImage src={props.imageSrc} alt={props.imageAlt}/>*/}
            {/*)}*/}
        </Card>
    );
};

export default CustomGreyBgCard;
