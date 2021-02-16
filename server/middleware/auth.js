const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    try {
        // console.log(req.cookies);
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ errorMessage: "Unauthorized" });
        }

        // check if token is valid, set var as object w/ user: 'userID'
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        // create req.user for future session reference
        req.user = verified.user
        // exit auth and return to where it was called
        next();
    } catch (err) {
        console.log(err)
        res.status(401).json({ errorMessage: "Unauthorized" });
    }
}

module.exports = auth;