
/**
 * Module dependencies.
 */

var express = require('express'),
    mongoose = require('mongoose'),
    routes = require('./routes'),
    user = require('./routes/user'),
    http = require('http'),
    path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//db connect
mongoose.connect('mongodb://localhost/helloExpress');

//db schema
var UserSchema = new mongoose.Schema({
     name: String,
     email: String,
     age: Number
 });
//
Users = mongoose.model('Users', UserSchema);


//index
app.get('/', routes.index);
app.get('/index', routes.index);

//user pages
app.get('/users', user.list);

app.get("/users/new", function(req, res){
    res.render("/users/new");
});

// get data from body of users/new
app.post('/users', function (req, res){
    var body = req.body;

    new Users({
        name: body.name,
        email: body.email,
        age: body.age
    })
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
