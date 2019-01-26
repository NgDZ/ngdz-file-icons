var fs = require('fs');
var css = `
.f-icon {
    position: relative;
    display: inline-block;
    line-height: 1em;
    width: 0.72em;
}

`;
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
});

function appendIcon(icon, fl) {
    css += `
.f-icon .` + icon + ` {
    background-image: url("icons/` + fl + `");
}
        
        `;
}