let express = require('express');
const connection = require('../config/database');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Validate Login. */
router.post('/cekLogin', function(req, res, next){
  let username = req.body.username;
  let password = req.body.password;
  if(username && password) {
    connection.query('SELECT * FROM tbl_pengguna WHERE userName = ? AND passWord = ?', [username, password], function(error, result, fields){
      if(error) throw error;
      if(result.length > 0){
        req.session.loggedin = true;
        req.session.username = username;
        res.redirect('penggunaAPP');
      } else {
        req.flash('error',"Incorrect Username and/or Password!");
        res.render('index',{

        });
      }
    });
  } else {
    req.flash('Please enter Username and Password!');
    res.render('index',{

    });
  }
});
module.exports = router;