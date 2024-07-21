const express= require('express')
const {RegisterUser, LoginUser} = require('./controller/auth.controller')
const router = express.Router()

router.post('/auth/signup', RegisterUser)
router.post('/auth/login', LoginUser)

module.exports = {
    router
}
