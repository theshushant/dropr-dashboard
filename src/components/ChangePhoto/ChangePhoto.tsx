import React from "react";
import styled from "styled-components";
import userAvatarLogo from "../../assets/UserAvatar.svg";
import {GlobalProps} from "../../screen/main/App";
import CustomTypography from "../CustomTypography/CustomTypography";

interface Props extends GlobalProps {
  imageUrl?: string | undefined;
  setFile: Function;
  setImageChanged: Function;
  isEditing: boolean;
}

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

const Image = styled.img`
   height: 12rem;
   width: 12rem;
   border-radius: 50%;
   object-position: center;
   object-fit: cover;
   contain: content;
   background-color: ${props => props.theme.colors.greyLightColor};
   margin-bottom: 0.9375rem;
   pointer-events: none;
`;

const HiddenInput = styled.input`
  width: 0;
  height: 0;
  //display: hidden;
`;

const ChangePhotoContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const ChangePhoto: React.FC<Props> = (props: Props) => {
  const inputRef = React.createRef<HTMLInputElement>();
  const { theme } = props;
  const [imageUrl, setUrl] = React.useState<undefined | string>(props.imageUrl);

  const handleFileChange = (event:any) => {
    const { target } = event;
    const { files } = target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = events => {
        setUrl(reader.result as string);
        props.setFile(files[0]);
        props.setImageChanged(true);
      };
    }
  };

  return (
    <ImageContainer>
      <Image
        draggable={false}
        src={imageUrl ?? userAvatarLogo}
        alt="Profile Image"
      />
      <ChangePhotoContainer>
        <HiddenInput
          ref={inputRef}
          id="profile"
          type="file"
          accept="image/*"
          capture="user"
          onChange={handleFileChange}
        />
        {props.isEditing ? (
          <div onClick={() => inputRef!.current!.click()}>
            <CustomTypography
              variant="body1"
              color={theme.colors.primaryColor}
              textDecoration="underline"
            >
              Change Photo
            </CustomTypography>
          </div>
        ) : null}
      </ChangePhotoContainer>
    </ImageContainer>
  );
};

export default ChangePhoto;
