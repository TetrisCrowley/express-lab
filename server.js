

const express = require('express');
const app = express();

app.get('/', (req, res) => {
response.send('hello from the server, Im sending this message')
});

app.listen(3000, () => {
 console.log("I am listening on port 3000");
});

