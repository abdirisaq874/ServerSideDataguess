const CustomApi = require('./CustomApiError');
const { StatusCodes } = require('http-status-codes');

class ValidationError extends CustomApi{
    
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.UNPROCESSABLE_ENTITY;
    }
}
module.exports = ValidationError;