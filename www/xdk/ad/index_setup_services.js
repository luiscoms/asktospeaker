var data_views   = { group:[], single:[], bindings:{}};

data_views.group.push({"model":{"eventId":null,"name":null,"when":null,"location":null},"child":".uib_w_3","parent":".uib_w_2"});
data_views.single.push({"selector":"#{{entry.2.eventId}}","options":{"effect":["html","attributes"]}});


data_views.group.push({"model":{"eventId":null,"name":null,"when":null,"location":null},"child":".uib_w_28","parent":".uib_w_27"});
data_views.single.push({"selector":".uib_w_10","options":{"effect":["html","attributes"]}});
data_views.group.push({"model":{"talkId":null,"eventId":null,"speaker":null,"title":null},"child":".uib_w_24","parent":".uib_w_23"});
data_views.single.push({"selector":"#af-header-ev","options":{"effect":["html","attributes"]}});

data_views.single.push({"selector":".uib_w_29","options":{"effect":["html","attributes"]}});
data_views.single.push({"selector":".uib_w_33","options":{"effect":["html","attributes"]}});
data_views.group.push({"model":{"talkId":null,"who":null,"question":null},"child":".uib_w_36","parent":".uib_w_35"});


data_views.single.push({"selector":".uib_w_34","options":{"effect":["html","attributes"]}});
data_views.single.push({"selector":".uib_w_39","options":{"effect":["html","attributes"]}});
/* prepare controllers */

data_support.prepare_mvc(".uib_w_3", "intel.xdk.services.asktospeakerevents", [], "standard-list", data_views);
data_support.prepare_mvc("#{{entry.2.eventId}}", "uib_w_3_data", [], "null", data_views);


data_support.prepare_mvc(".uib_w_28", "intel.xdk.services.asktospeakerevents", [], "standard-list", data_views);
data_support.prepare_mvc(".uib_w_10", "uib_w_28_data", [], "null", data_views);
data_support.prepare_mvc(".uib_w_24", "intel.xdk.services.asktospeakertalks", [], "standard-list", data_views);
data_support.prepare_mvc("#af-header-ev", "uib_w_28_data", [], "null", data_views);

data_support.prepare_mvc(".uib_w_29", "uib_w_28_data", [], "null", data_views);
data_support.prepare_mvc(".uib_w_33", "uib_w_24_data", [], "null", data_views);
data_support.prepare_mvc(".uib_w_36", "intel.xdk.services.asktospeakerquestions", [], "standard-list", data_views);


data_support.prepare_mvc(".uib_w_34", "uib_w_24_data", [], "null", data_views);
data_support.prepare_mvc(".uib_w_39", "uib_w_24_data", [], "null", data_views);
