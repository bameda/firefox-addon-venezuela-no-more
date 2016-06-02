var self = require("sdk/self");

function doReplacements(tab) {
    tab.attach({
        "contentScriptFile": [
            self.data.url("libs/findAndReplaceDOMText.js"),
            self.data.url("content.js")
        ]
    });
}

require("sdk/tabs").on("ready", doReplacements);
