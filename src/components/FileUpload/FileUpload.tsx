import React, { useRef } from "react";
import imageCompression from "browser-image-compression";
interface  Props {
    child:React.ReactNode,
    onSelect: Function,
}
const FileUpload:React.FC<Props> = (props) => {
    const inputFile:React.RefObject<HTMLInputElement> = useRef(null);

    const handleFileUpload = async (e: any) => {
        const {files} = e.target;
        if (files && files.length) {
            const filename = files[0].name;

            var parts = filename.split(".");
            const fileType = parts[parts.length - 1];
            console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true
            }
            try {
                const compressedFile = await imageCompression(files[0], options);
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

                props.onSelect(compressedFile); // write your own logic
            } catch (error) {
                console.log(error);
            }

        }
    };

    const onButtonClick = () => {
        if(inputFile!=null){
            inputFile!.current!.click();
        }
    };

    return (
        <div>
            <input
                style={{ display: "none" }}
                 accept=".png,.svg"
                ref={inputFile}
                onChange={handleFileUpload}
                type="file"
            />
            <div className="button" onClick={onButtonClick}>
                {props.child}
            </div>
        </div>
    );
};

export default FileUpload;
