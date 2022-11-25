import React, { useRef } from "react";
interface  Props {
    child:React.ReactNode,
    onSelect: Function,
}
const FileUpload:React.FC<Props> = (props) => {
    const inputFile:React.RefObject<HTMLInputElement> = useRef(null);

    const handleFileUpload = (e:any) => {
        const { files } = e.target;
        if (files && files.length) {
            const filename = files[0].name;

            var parts = filename.split(".");
            const fileType = parts[parts.length - 1];
            console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.

            props.onSelect(files[0]);
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
