(function() {
    "use strict";
    /*
    hook up event handlers 
    */
    function register_event_handlers()
    {


    }
    document.addEventListener("app.Ready", register_event_handlers, false);

    // trick to update talks
    $(document).on("loadpanel","#event_talks", function (event) {
        $('#hidevid').change();
    });
    // trick to update questions
    $(document).on("loadpanel","#ask_page", function (event){
        $('#qst').change();
        console.log($('#qse').val(), $('#qst').val())
    });

    $(document).on('click', '#newQuestion', function (event) {
        console.log('newQuestion');
        // Call the method with the default parameters and wait for the promise
        intel.xdk.services.asktospeakernewquestion({
                "eventId":$('#qse').val(),
                "talkId":$('#qst').val(),
                "who":$('#nqw').val(),
                "question":$('#nqq').val()
            })
            .then(function (response) {
                console.log(response);
                $('#nqw, #nqq').val(''),
                $('#qst').change();
            });
    });
})();
