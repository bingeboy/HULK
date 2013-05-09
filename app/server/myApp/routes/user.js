
/*
 * GET users listing.
 */

exports.list = function(req, res){
    var message = {
        title: "boobs"
    }
    res.send(message.title);
};

// users index
exports.index = function(req, res){
    Users.find({}, function(err, docs){
        res.render('user/index', {
            users: docs, //mongo data
            title: "test on title from nested folder"
        });
    });


};

//creates page for new users
exports.new = function(req, res){
    res.render('user/newUser', {
        title: 'Users'
    });
};

// users show
exports.show = function(req, res){
    res.render('users/show', {
        title: 'Show'
    });// { user: req.users });
};