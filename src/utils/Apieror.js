class apieror extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors = [],
        stack = []
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null   //hw-- find what is in data fiels
        this.message = message
        this.message = false;
        this.errors = errors



        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }


    }
}

export default {apieror}