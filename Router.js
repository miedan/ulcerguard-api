const router = require('express').Router();
const CONST = require('./CONST');
const { SignIn } = require('./routes/Auth/SignIn');
const { SignUp } = require('./routes/Auth/SignUp');


router.post(CONST.ROUTES.AUTH.SIGNUP, SignUp);
router.get(CONST.ROUTES.AUTH.SIGNIN, SignIn);


module.exports = router;