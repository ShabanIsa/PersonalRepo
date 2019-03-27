import { Db, MongoClient } from 'mongodb';

/**
 * Class to connect with mongo and get the todo db
 *
 * @export
 */

export class MongoDb {
    private client!: MongoClient;
    private readonly connectionString = 'mongodb://localhost:27017';
    private readonly dbName = 'dashboard';

    /**
     * closes the connection with mongo client
     *
     */
    public close() {
        if (this.client) {
            this.client.close()
            .then()
            .catch(error => {
                console.error(error);
            });
        } else {
            console.error('close: client is undefined');
        }
    }

    /**
     * connects to mongo client
     *
     */
    async connect() { // add async
      console.log('connecting to mongo');
  
      try {
        if (!this.client) { // I added this extra check
          console.log('setting client');
          this.client = await MongoClient.connect(this.connectionString, { useNewUrlParser: true })
          console.log(this.client);      
        }
      } catch(error) {
        console.log('error during connecting to mongo: ');
        console.error(error);
      }    
  }
     // gets the todo db from mongo
    public getDb(): Db {
        if (this.client) {
            console.info(`getting db ${this.dbName}`);

            return this.client.db(this.dbName);
        } else {
            console.error('no db found');

            return undefined;
        }
    }
}