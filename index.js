const express = require('express');
const app = express();
const portNumber = 8080;
const currentDate = Date.now();
const formatedDate = new Intl.DateTimeFormat('en-US')
    .format(currentDate);


app.get('/', (request, response) => {
    response
        .set('Content-Type', 'text/plain')
        .send('Hello World en node JS\n' +
            `on est le : ${formatedDate}`)
});


app.listen(8080, function () {
    const consoleMsg =
        `Example app listening on port ${portNumber}!`;
    console.log(consoleMsg)
});