function startupComplete() {
    console.log("Startup complete!");
}

function whenReady() {
    startupAnimation($("#e1"), false, startupComplete);
    startupAnimation($("#e2"), true,  startupComplete);
}
$(document).ready(whenReady);