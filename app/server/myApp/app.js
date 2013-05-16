/*
* Module dependencies.
*/
var express    = require('express')
    , mongoose = require('mongoose')
    , routes   = require('./routes')
    , user     = require('./routes/user')
    , common    = require('./routes/common')
    , formidable = require ('formidable')
    , fs       = require('fs')
    , http     = require('http')
    , util     = require('util')
    , path     = require('path');

var app = express();


/*
 * connect middleware
 */
app.configure(function() {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser({ keepExtensions: true, uploadDir: __dirname + '/public/uploads' }));
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    app.use(require('less-middleware')({ src: __dirname + '/public' }));
    app.use(express.static(path.join(__dirname, '/public')));
    app.use(express.errorHandler());
    app.use(express.static(__dirname + '/static'));

});


// development only
 //if ('development' == app.get('env')) {
//  app.use(express.errorHandler());
//}


/*
 * Database
 */

//db connect
mongoose.connect('mongodb://localhost/helloExpress');

//db schema
var UserSchema = new mongoose.Schema({
     name: String,
     email: String,
     age: Number,
     profileImage: String
});
//
Users = mongoose.model('Users', UserSchema);

//favicon
//app.use(express.favicon(__dirname + '/public/img/favicon.ico'));

/*
 * Index Page
 */

//index
app.get('/', routes.index);
app.get('/index', routes.index);

//checks if  :name is in db
app.param("name", function (req, res, next, name){
    Users.find({ name: name }, function ( err, docs ) {
        req.user = docs[0];
        next();
    });
});

/*
* Users Section
*/

//Index Users
app.get('/users/', user.index);
app.get('/users', user.index);
//Create User
app.get('/users/new', user.new);
//Display User
app.get('/users/:name', user.profile);
//Edit User
app.get('/users/:name/edit', user.edit);
//Update User
app.put("/users/:name", user.updateRequest);
//Destroy
app.delete("/users/:name", user.destroyUser);
// get data from body of users/new
app.post('/users', user.createAndSave);


//File upload
app.get('/upload', common.imageForm);
app.post('/upload', common.uploadImage);


http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
