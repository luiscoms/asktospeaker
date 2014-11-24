var data_views   = { group:[], single:[], bindings:{}};




data_views.single.push({"selector":"#af-header-0","options":{"effect":["html","attributes"]}});

data_views.group.push({"model":{"name":null},"child":".uib_w_3","parent":".uib_w_2"});
/* prepare controllers */

data_support.prepare_mvc("#af-header-0", "uib_w_3_data", [], "null", data_views);

data_support.prepare_mvc(".uib_w_3", "intel.xdk.services.events", [], "standard-list", data_views);
