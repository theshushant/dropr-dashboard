class FileModal {
    file_path!: string;
    file_url!: string;
    signed_url!: string;

    constructor() {
        this.signed_url;
        this.file_path;
        this.file_url;
    }
}

export default FileModal;