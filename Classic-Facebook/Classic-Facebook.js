var token = require("DTSGInitialData").token;
var user_id = require("CurrentUserInitialData").USER_ID;
fetch("https://www.facebook.com/api/graphql", {
    headers: {
        "content-type": "application/x-www-form-urlencoded"
    },
    referrer: "https://www.facebook.com/",
    body: 'av=' + user_id + '&__user=' + user_id + '&__a=1&dpr=1&fb_dtsg=' + token + '&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=CometTrialParticipationChangeMutation&variables={"input":{"change_type":"OPT_OUT","source":"FORCED_GROUP_ADMIN_OPT_OUT","actor_id":"' + user_id + '","client_mutation_id":"3"}}&server_timestamps=true&doc_id=2317726921658975',
    method: "POST",
    mode: "cors",
    credentials: "include"
})
setTimeout(function() {
    location.reload();
}, 2000);
