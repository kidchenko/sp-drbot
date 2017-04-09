const botBuilder = require('claudia-bot-builder');

module.exports = botBuilder(request => `Hello from dr bot. Your request was ${request.text}`);