function startupComplete() {
    console.log("Startup complete!");
}

function whenReady() {
    startupAnimation(true, startupComplete);
}
$(document).ready(whenReady);