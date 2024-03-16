import jwt from  "jsonwebtoken"
import bcrypt from  'bcryptjs';
import config  from '../config'

class Encreyption {

    constructor() {
    }

    static async generateWebToken(data) {
        const token = await jwt.sign(data, config.JwtToken.secretkey, {expiresIn: config.JwtToken.expiresIn})
        return token
    }

    varifyJWTToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, config.JwtToken.secretkey, (error, decoded) => {

                if (error) {
                    reject(error)
                }
                resolve(decoded)
            })
        })

    }
}
