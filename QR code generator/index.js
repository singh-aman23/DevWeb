const inquirer = require('inquirer');
var qr = require('qr-image');

inquirer
  .prompt([
    {message : "type in your url: ", name : "URL"}
])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(require('fs').createWriteStream('myQr.png'));

});

//Node.js packages used : inquirer, qr-image
//https://www.npmjs.com/package/inquirer
//https://www.npmjs.com/package/qr-image
