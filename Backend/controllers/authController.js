const User = require('../models/User')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_secret, {
        expiresIn: '30d',
    });
};

exports.registerUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        
        const user = await User.create({
            username,
            password,
        });
        console.log(user)
        console.log('registerUser success at backend')
        res.status(201).json({
            _id: user._id,
            username: user.username,
        })
        
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}
exports.loginUser = async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            res.status(200).json({ message: 'User Found', userId: user.id })
        }
        else {
            res.status(401).json({ message: 'User Not Found' })
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

