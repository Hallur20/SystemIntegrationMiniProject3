const proxy = require('express-http-proxy');
const app = require('express')();
const port = 4444;

app.use('/feedback', proxy('http://feedback-service:3333/feedback'));

app.listen(port, () => { console.log(`Gateway listening on port ${port}`) });