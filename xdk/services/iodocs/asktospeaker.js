(function (credentials, helpers) {
  var exports = {};

  /* Data Feed Function */
  exports.events = function (params) {
    var url = 'http://localhost:3000/events';
    return $.ajax({url: url});
  };

  exports.eventbyid = function (params) {
    var url = 'http://localhost:3000/events/' + params.id;
    return $.ajax({url: url});
  };

  exports.talks = function (params) {
    var url = 'http://localhost:3000/events/' + params.eventId + '/talks';
    return $.ajax({url: url});
  };

  exports.questions = function (params) {
    var url = 'http://localhost:3000/events/' + params.eventId + '/talks/' + params.talkId + '/questions';
    return $.ajax({
        url: url,
        type: 'GET'
    });
  };

  exports.newquestion = function (params) {
    var url = 'http://localhost:3000/events/' + params.eventId + '/talks/' + params.talkId + '/questions',
        newQuestion = {
            talkId : params.talkId,
            who : params.who,
            question : params.question
        };
    // return $.ajax({url: url});
    return $.ajax({
        url: url,
        type: 'POST',
        data: newQuestion,
        dataType: 'JSON'
    });
  };

  return exports;
})
