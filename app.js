require('dotenv').config()
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')

const routes = require('./routes/index');
const api = require('./routes/api');

const app = express();
const ModelUser = require('./models/user');


// MONGODB AND MONGOOSE
mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));

// -----------------------------------------------------------------------------
// ROUTE AND PASSPORT CONFIGURATION
// -----------------------------------------------------------------------------
app.use(passport.initialize())

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
}))

app.use(passport.session())


app.use('/', routes);
app.use('/api', api);

passport.use(new LocalStrategy(ModelUser.authenticate()))

// BIND PASSPORT WITH USER MODEL (PASSPORT-LOCAL-MONGOOSE)
passport.serializeUser(ModelUser.serializeUser())
passport.deserializeUser(ModelUser.deserializeUser())


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
