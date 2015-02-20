(function (credentials, helpers) {
  var exports = {},
      server = 'http://192.168.43.191';

  /* Data Feed Function */
  exports.events = function (params) {
    var url = server + '/events';
    return $.ajax({url: url});
  };

  exports.eventbyid = function (params) {
    var url = server + '/events/' + params.id;
    return $.ajax({url: url});
  };

  exports.talks = function (params) {
    var url = server + '/events/' + params.eventId + '/talks';
    return $.ajax({url: url});
  };

  exports.questions = function (params) {
    var url = server + '/events/' + params.eventId + '/talks/' + params.talkId + '/questions';
    return $.ajax({
        url: url,
        type: 'GET'
    });
  };

  exports.newquestion = function (params) {
    var url = server + '/events/' + params.eventId + '/talks/' + params.talkId + '/questions',
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
