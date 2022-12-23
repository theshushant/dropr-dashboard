class ErrorService {
    error: string|undefined;

    static getInstance(): ErrorService {
        return new ErrorService(

        );
    }

    setError(err: string) {
        this.error = err;
    }

    voidError(){
        this.error = undefined;
    }


}

export const errorService = ErrorService.getInstance();
