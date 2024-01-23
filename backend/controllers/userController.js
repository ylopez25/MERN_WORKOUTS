const signupUser = async (req,res) => {
res.json({ mssg:'sign up' })
}

const loginUser = async (req,res) => {
res.json({ mssg: 'login' })
}

module.exports = {
    signupUser,
    loginUser
}