/* --------------
 initialization 
  the xdkFilter argument can be set to a function that
   receives the data of the service method and can return alternate data
   thus you can reformat dates or names, remove or add entries, etc.
   -------------- */

angular.module("myApp", []);


data_support.ready(intel.xdk.services.nerdyjokes.bind(null, {"xdkFilter":null}));
data_support.ready(intel.xdk.services.events.bind(null, {"xdkFilter":null}));