import { localMiddleware } from './localMiddleward';
import { routes } from './routes';
import globalRouter from './routes/globalRouter';
import session from 'express-session';

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); 



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'millionfood2',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge :60000}
}));
app.use("/public",express.static(path.join(__dirname, 'public')));
app.use("/uploads",express.static(path.join(__dirname, 'uploads')))

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
app.use(localMiddleware)
app.use(routes.home,globalRouter)

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

export default app;
