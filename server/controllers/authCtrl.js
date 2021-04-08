const {
    validateLogin
} = require('./../middleware/validation');

const authService = require('./../services/authService');

const jwt = require('jsonwebtoken');

const TokenSecret = process.env.TOKEN_SECRET;

// login
exports.login = async (req, res) => {
    try {
        // validate request
        await validateLogin(req.body);
        // authenticate the user
        const user = await authService.checkUser(req.body);
        if (user === null) return res.status(400).json({ status: 'error', message: 'Invalid Credentials' });

        // Validate Password
        const checkPassword = await authService.validatePassword(req.body, user.password);
        if (!checkPassword) return res.status(400).json({ status: 'error', message: 'Invalid Credentials' });

        // creating token
        const token = jwt.sign({ id: user.id, email: user.email }, TokenSecret);
        return res.status(200).json({ status: 'success', message: 'Logged In Successfully', token });

    } catch (error) {
        if (error.isJoi === true) return res.status(400).json({ status: 'error', message: error.details[0].message });
        return res.status(400).json({ status: 'error', message: error });
    }
}
