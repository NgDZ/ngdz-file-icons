var fs = require('fs');
var css = `.f-icon {
    position: relative;
    display: inline-block;
    min-height: 24px;
    min-width: 24px;
}

`;
var all = [];
fs.readdir("icons", function (err, items) {

    for (var i = 0; i < items.length; i++) {
        var fl = items[i];
        var icon = fl.replace(".svg", "");
        appendIcon(icon, fl);
        if (icon.length == 4 && icon[3] == "x") {
            appendIcon(icon.substr(0, 3), fl);

        }
    }
    console.log(css);
    fs.writeFileSync("main.css", css);
    var tsFile = "export const ALL_FILES_ICONS=" + JSON.stringify(all) + ";";

    fs.writeFileSync("consts.ts", tsFile);
});

function appendIcon(icon, fl) {
    all.push(icon);
    css += `
.f-icon.` + icon + ` {
    background-image: url("icons/` + fl + `");
}
`;
}