var express = require('express'),
  router = express.Router(),
  db = require('../models'),
  pg = require("pg");
  var conString = "postgres://admin12:admin@localhost:5432/netplay";
  var client = new pg.Client(conString);

module.exports = function (app) {
  app.use('/api', router);
};

router.get('/', function (req, res, next) {
  db.User.findAll().then(function (articles) {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});




router.post('/signup', function (req, res, next) {
	var number = req.body.number, password = req.body.password, network = req.body.network, network_type = req.body.network_type;
	  client.connect(function(err) {
	  	if(err)
	  	{
             console.log(err);
	  	}
	  	else
	  	{
			client.query(
	            "INSERT into 'User' ( number, password, created_at) VALUES($1, $2, $3) RETURNING id", 
	            ['title', 'long... body...', new Date()], 
	            function(err, result) {
	                if (err) {
	                } else {
	                    console.log('row inserted with id: ' + result.rows[0].id);
	                }
	            });  
	  	}
	  });
	res.send();
});
