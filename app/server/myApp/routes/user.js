
/*
 * GET users listing.
 */

//exports.userTemplateObj = function(req, res){
//    console.log("This is the req: ",req);//seen in node console.
//    //calls jade view
//    res.render('users', {
//        title: 'Users',
//        heroUnitTitle: 'Hulk, this is coming from index.js'
//    });
//};

exports.list = function(req, res){
    var message = {
        title: "boobs"
    }
    res.send(message.title);
};

exports.new = function(req, res){
    res.render('newUser', {
        title: 'Users'
    });

};