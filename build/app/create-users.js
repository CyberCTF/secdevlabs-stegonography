// Written for this lab: creates the stego.users collection before the app starts. Upstream's
// index.js creates that collection and inserts the admin user in two concurrent connections; when
// the insert wins, createCollection() throws "a collection 'stego.users' already exists" and the
// app dies on its first start (Docker restarts it, then it runs). With the collection already
// there, the race is gone. Errors are ignored: the app reports its own.
var MongoClient = require('/app/node_modules/mongodb').MongoClient;
MongoClient.connect('mongodb://db:27017/stego', function (err, client) {
    if (err) { console.log('create-users: ' + err.message); return; }
    client.db('stego').createCollection('users', function () { client.close(); });
});
