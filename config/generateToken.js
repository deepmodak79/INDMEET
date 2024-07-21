const jwt=require('jsonwebtoken')

const generateToken = (id)=>{
    return jwt.sign({id}, 'sdcode001', {expiresIn:'15d'})
}

module.exports = generateToken