const {exec} = require('child_process');
const fs = require('fs');

fs.readFile('src/environments/environment.dist.ts', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    var result = data;
    result = result.replace('$server_URL$', process.env.URL);

    fs.writeFile('src/environments/environment.prod.ts', result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});