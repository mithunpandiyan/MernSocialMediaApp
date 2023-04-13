const  Jwt = require('express-jwt')


const requireSignin = Jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"]
})

module.exports = requireSignin