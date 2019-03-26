//npm install --save mongodb
const MongoClient = require('mongodb');

run().catch(error => console.error(error.stack));

//await db.dropDatabase();

async function run() {
    const client = await MongoClient.connect('mongodb://localhost:27017/test');
    const db = client.db('dashboard');

    await db.collection('dashboardCollection').insertOne(
        {item: '60', value: 'This is awesome!'}
    );

    //Get result
    const result = await db
        .collection('dashboardCollection')
        .find()
        .toArray();
    console.log(result);
}