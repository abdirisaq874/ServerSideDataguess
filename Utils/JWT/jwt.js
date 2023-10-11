const jwt = require('jsonwebtoken');

const CreateJwt = (payload) => jwt.sign(payload, process.env.JWT_SECRET);
const isTokenValid = (token) => jwt.verify(token, process.env.JWT_SECRET);
const AttachCookiesToResponse = ({res, user,refreshToken}) => {

    const AccessTokenJwt = CreateJwt({payload:{user}});
    const RefreshTokenJwt = CreateJwt({payload: {user,refreshToken}});
    
    
    const oneDay = 1000;
    const longerExp = 1000 * 60 * 60 * 24 * 30;

    

    res.cookie('AccessToken', AccessTokenJwt, {
        httpOnly: true,
        maxAge: oneDay,
        secure: process.env.NODE_ENV === 'production',
        signed: true,
        expires: new Date(Date.now() + oneDay),
    });

    res.cookie('RefreshToken', RefreshTokenJwt, {
        httpOnly: true,
        maxAge: longerExp,
        secure: process.env.NODE_ENV === 'production',
        signed: true,
        expires: new Date(Date.now() + longerExp),
    });
}

module.exports = {CreateJwt, isTokenValid, AttachCookiesToResponse};