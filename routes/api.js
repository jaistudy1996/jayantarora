var webshot = require('webshot');
var express = require('express');
var router = express.Router();

var options = {
  streamType: 'png',
  windowSize: {
    width: 300,
    height: 300
  },
  phantomPath: path.join(__dirname, '../node_modules/phantomjs-prebuilt/bin'), //only for heroku
  shotSize: {
    width: 'all',
    height: 'all'
  }
};

router.get('/screenshot/:url', function(req, res){
  console.log(req.params);
  webshot(req.params.url, __dirname+'/../public/'+req.params.url+'.png', options, function(err){
    if(err){
      console.log("error occures in webshot: ", err);
    }
    console.log('image created');
    console.log(__dirname);
    res.redirect('/'+req.params.url+'.png');
  });
});



module.exports = router;
