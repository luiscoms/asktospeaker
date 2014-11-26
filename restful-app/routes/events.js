var express = require('express');
var router = express.Router();

router.param(function(name, fn){
  if (fn instanceof RegExp) {
    return function(req, res, next, val){
      var captures;
      if (captures = fn.exec(String(val))) {
        req.params[name] = captures;
        next();
      } else {
        next('route');
      }
    }
  }
});

router.param('id', /^\d+$/);
router.param('eventId', /^\d+$/);
router.param('talkId', /^\d+$/);

/*
 * GET events.
 */
router.get('/', function(req, res) {
    var db = req.db;
    db.collection('events').find().toArray(function (err, items) {
        res.json(items);
    });
});

/*
 * GET event.
 */
router.get('/:id', function(req, res) {
    var db = req.db;
    var eventId = req.params.id.toString();
    db.collection('events').find({eventId: eventId}).toArray(function (err, items) {
        res.json(items);
    });
});

/*
 * GET talks.
 */
router.get('/:id/talks', function(req, res) {
    var db = req.db;
    var eventId = req.params.id.toString();
    db.collection('talks').find({eventId: eventId}).toArray(function (err, items) {
        res.json(items);
    });
});

/*
 * GET questions.
 */
router.get('/:id/talks/:talkId/questions', function(req, res) {
    var db = req.db;
    // var eventId = parseInt(req.params.id, 10);
    var talkId = req.params.talkId.toString();
    db.collection('questions').find({talkId: talkId}).toArray(function (err, items) {
        res.json(items);
    });
});

/*
 * POST to questions.
 */
router.post('/:id/talks/:talkId/questions', function(req, res) {
    var db = req.db;
    db.collection('questions').insert(req.body, function(err, result) {
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

// /*
//  * POST to adduser.
//  */
// router.post('/adduser', function(req, res) {
//     var db = req.db;
//     db.collection('userlist').insert(req.body, function(err, result){
//         res.send(
//             (err === null) ? { msg: '' } : { msg: err }
//         );
//     });
// });

// /*
//  * DELETE to deleteuser.
//  */
// router.delete('/deleteuser/:id', function(req, res) {
//     var db = req.db;
//     var userToDelete = req.params.id;
//     db.collection('userlist').removeById(userToDelete, function(err, result) {
//         res.send((result === 1) ? { msg: '' } : { msg:'error: ' + err });
//     });
// });

module.exports = router;