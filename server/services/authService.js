const database = require('./../models');

// password
const bcrypt = require('bcrypt-nodejs')

/**
 * SERVICES
 */

// fetch user by email and password
module.exports.checkUser = async (data) => {
    try {
        return await database.Users.findOne({
            where: { email: data.email }
        })
    } catch (error) {
        throw error;
    }
}

// password validation
module.exports.validatePassword = async(data, password) => {
    const validPassword = bcrypt.compareSync(data.passowrd, password);
    return validPassword;
}

// hash password
module.exports.hashPassword = async(password) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}
