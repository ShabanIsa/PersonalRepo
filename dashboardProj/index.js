var express = require('express');
var router = express.Router();
var mongo = require('mongo').MongoClient;
var assert = require('assert');
//const client = MongoClient.connect('mongodb://localhost:27017/test');

router.get('/', function (req, res, next) {
    result.render('index');
});

router.get('/get-data', function (req, res, next) {

});

router.post('/insert', function (req, res, next) {
    var item = {
        title: req.body.title
    };

    mongo.connect(url, function(err,db){
        assert.equal(null, err);
        db.collection('dashboardCollection').insertOne(item, function(err, result){
            assert.equal(null, err);
            console.log('Inserted');
            db.close();
        });

    });
    res.redirect('/');
});

module.exports = router;

/*
function logThisInPage() {
    var somevar, stringValue;
    somevarhere = document.getElementById("inputForm1");
    stringValue = somevarhere.elements["name"].value;
    document.getElementById("container").innerHTML = "Here starts the container and " + stringValue + "<br>";

    const MongoClient = require('mongodb');//=require('mongo').MongoClient;
    run().catch(error => console.error(error.stack));

    async function run() {

        const client = await MongoClient.connect('mongodb://localhost:27017/test');
        const db = client.db('dashboard');

        await db.collection('dashboardCollection').insertOne(
            { item: '60', value: stringValue }
        );

        //Get result
        const result = await db
            .collection('dashboardCollection')
            .find()
            .toArray();
        console.log(result);
    }
}*/