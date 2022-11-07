class ErrorModel {
    errorCode: number;
    errors: string;
    statusCode: number;

    constructor() {
        this.errorCode = 0;
        this.errors = "";
        this.statusCode = 0;
    }
}

export default ErrorModel;