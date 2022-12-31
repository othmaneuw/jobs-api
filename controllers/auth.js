

const register = (req,res) =>{
    res.send('register request');
}

const login = (req,res) =>{
    res.send('Login request');
}

module.exports = {
    register,
    login
};