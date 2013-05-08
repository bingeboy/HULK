
/*
 * GET home page.
 *
 * This page has the index object for the Jade template.
 *
 */

exports.index = function(req, res){
  res.render('index', {
      title: 'Hulk',
      heroUnitTitle: 'Hulk, this is coming from index.js'
  });
};