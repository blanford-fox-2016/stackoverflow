module.exports = {
    homePage: function(req, res, next) {
        res.render('index', { title: 'Stuck Overflow' });
    },
    registerForm: function(req, res, next) {
        res.render('register', { title: 'Stuck Overflow' })
    },
    loginForm: function(req, res, next) {
        res.render('login', { title: 'Stuck Overflow' })
    }
}
