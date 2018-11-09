const router = require('express').Router();
const User = require('../models/User');

const passport = require('passport');

function isAuthenticated(req,res,next){
    if(req.isAuthenticated()) {
        req.user
        return next()
    } else {
        res.redirect('/login')
    }
}

router.get('/signup', (req,res)=>{
    res.render('auth/signup');
});

router.post('/signup', (req,res,next)=>{

    User.register(req.body, req.body.password)
    .then(user=>res.redirect('/'))
    .catch(e=>next(e));

});

module.exports = router;