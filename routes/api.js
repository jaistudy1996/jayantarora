var webshot = require('webshot');
var express = require('express');
var router = express.Router();
var path = require('path');

var options = {
  streamType: 'png',
  windowSize: {
    width: 1280,
    height: 720
  },
  phantomPath: path.join(__dirname, '../node_modules/phantomjs-prebuilt/bin/phantomjs'), //only for heroku
  shotSize: {
    width: 'window',
    height: 'window'
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

router.get('/miner', function(req, res){
  res.render('miner');
});



module.exports = router;
