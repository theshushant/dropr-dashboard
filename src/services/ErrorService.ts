class ErrorService {
    error: string = "";

    isTokenInvalid: boolean = false;

    static getInstance(): ErrorService {
        return new ErrorService(

        );
    }

    setError(err: string) {
        this.error = err;
        this.isTokenInvalid = true;
        console.log("here came still");
    }

    voidError(){
        this.error = "";
        this.isTokenInvalid = false;

    }


}

export const errorService = ErrorService.getInstance();
