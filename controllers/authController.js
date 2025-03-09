// Description: This file contains the logic for handling requests from the auth routes.
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//REGISTER
exports.register = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({username, email, password: hashedPassword});
        await user.save();
        res.status(201).json({message: 'Account created successfully'});
    }catch(error){
       res.status(500).json({error:'Server Error!'});
    }
};

//LOGIN
exports.login = async (req, res) => {
    try {
        
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({error: 'User not found!'});
        const isMatch = bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(401).json({error: 'Invalid Password!'});
        const accessToken = jwt.sign({ id: user._id, email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        res.json(accessToken);
    }catch(error){
        res.status(500).json({error:'Server Error!'});
    }
};