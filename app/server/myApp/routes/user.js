
/*
 * GET users listing.
 */

exports.list = function(req, res){
    var message = {
        title: " "
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

exports.edit = function (req, res) {
    res.render("edit", { user: req.user });
};

exports.profile = function (req, res) {
    res.render("profile", { user: req.user });
};

exports.updateRequest = function (req, res) {
    var b = req.body;
    Users.update(
        {name: req.params.name},
        {name: b.name, age: b.age, email: b.email},
        function (err) { //TODO this is sort of a hack since it triggers err every time but its working for now.
            res.redirect("users/" + b.name);
        });
};

//exports.destroyUser = function (req, res) {
//    Users.remove({ name: req.params.name}, function (err){
//        res.redirect("/users/");
//    });
//};
