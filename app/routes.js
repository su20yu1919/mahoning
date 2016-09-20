/**
 * Created by billsu on 9/19/16.
 */
// Dependencies
var mongoose        = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var Property            = require('./model.js');

// Opens App Routes
module.exports = function(app) {

    // GET Routes
    // --------------------------------------------------------
    // Retrieve records for all users in the db
    // app.get('/reports', function(req, res) {
    //     MongoClient.connect("mongodb://localhost:27017/mahoning", function (err, db) {
    //         if (err) {
    //             return console.dir(err);
    //         }
    //
    //         var collection = db.collection('mahoning');
    //         collection.findOne({mykey: 1}, function (err, item) {
    //             if (err)
    //                 res.send(err);
    //
    //             // If no errors are found, it responds with a JSON of all users
    //             res.json(item);
    //         });
    //
    //     });
    // });

    app.get('/properties', function(req, res){

        // Uses Mongoose schema to run the search (empty conditions)
        var query = Property.findOne({"property_number": req.query.property_number});
        console.log(req);
        query.exec(function(err, properties){
            if(err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            res.json(properties);
        });
    });

};