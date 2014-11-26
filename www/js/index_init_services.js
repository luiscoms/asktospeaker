/* --------------
 initialization 
  the xdkFilter argument can be set to a function that
   receives the data of the service method and can return alternate data
   thus you can reformat dates or names, remove or add entries, etc.
   -------------- */

angular.module("myApp", []);

data_support.ready(intel.xdk.services.asktospeakerevents.bind(null, {"xdkFilter":null}));
data_support.ready(intel.xdk.services.asktospeakertalks.bind(null, {"xdkFilter":null}));
data_support.ready(intel.xdk.services.asktospeakerquestions.bind(null, {"talkId":"0","xdkFilter":null}));
data_support.ready(intel.xdk.services.asktospeakernewquestion.bind(null, {"eventId":"0","talkId":"0","who":"0","question":"0","xdkFilter":null}));