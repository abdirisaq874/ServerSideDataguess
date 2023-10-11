const CustomApi = require('./CustomApiError');
const { StatusCodes } = require('http-status-codes');

class UnAuthenticatedError extends CustomApi{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = UnAuthenticatedError;