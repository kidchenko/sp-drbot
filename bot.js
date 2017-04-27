const botBuilder = require('claudia-bot-builder');
const fbTemplate = botBuilder.fbTemplate;
const MongoClient = require('mongodb').MongoClient;

const mongoUri = process.env.MONGO_URI;

module.exports = botBuilder(request => {
    
    MongoClient.connect(mongoUri, { uri_decode_auth: true }, function(err, db) {

    var collection = db.collection('estabSus');
    collection.findOne(function(err, one) {
        return new fbTemplate.Text(one.geoJson.name).addQuickReplyLocation().get()
    });
    
    db.close();

    });
    
});
