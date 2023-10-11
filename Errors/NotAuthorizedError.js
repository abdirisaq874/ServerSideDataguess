const CustomApi = require('./CustomApiError');
const { StatusCodes } = require('http-status-codes');

class NotAuthorizedError extends CustomApi{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.FORBIDDEN;
    }
}

module.exports = NotAuthorizedError;