

const fs = require('fs')
const path = require("path")
// console.log("path=>", path.join(__dirname, "../public"))
// const dir = '/Users/flavio/folder'
const nunitoFiles = fs.readdirSync(path.join(__dirname, "../public/fonts/Nunito/static"))
const nunito = {};
for (const file of nunitoFiles) {
    if (file.split('.').pop() == "ttf") {
        nunito[file.split('.').shift()] = file.split('.').shift();
    }
}
const poppinsFiles = fs.readdirSync(path.join(__dirname, "../public/fonts/Poppins"))
const poppins = {};
for (const file of poppinsFiles) {
    if (file.split('.').pop() == "ttf") {
        poppins[file.split('.').shift()] = file.split('.').shift();
    }
}

var _default = {
    poppins: poppins,
    nunito: nunito
}



exports.default = _default;


