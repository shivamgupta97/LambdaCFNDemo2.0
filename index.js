var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
    callback(null, {
        statusCode: '200',
        body: 'THIS EXAMPLE FOR LAMBDA SERVICE VIA API WORKS SUCCESSFULLY AND AS A DEMO TIME RETURNED IS: ' + currentTime.toString(),
    });
};
