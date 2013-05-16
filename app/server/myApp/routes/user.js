
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
            title: "User List"
        });
    });


};

//creates page for new users
exports.new = function(req, res){
    res.render('user/newUser', {
        title: 'Create a New user'
    });
};

// users show
exports.show = function(req, res){
    res.render('users/show', {
        title: 'Show'
    });// { user: req.users });
};

exports.edit = function (req, res) {
    res.render("user/edit", { user: req.user });
};

exports.profile = function (req, res) {
    res.render("user/profile", { user: req.user });
};
exports.createAndSave = function (req, res ) {
    var body = req.body;
    //create and then save the user to mongodb
    new Users({
          name: body.name,
          email: body.email,
          age: body.age
      }).save(function (err, user){
          if (err) res.json(err);
          res.redirect('/users/' + user.name)
      });
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

exports.destroyUser = function (req, res) {
    Users.remove({ name: req.params.name}, function (err){
        res.redirect("/users/");
    });
};
