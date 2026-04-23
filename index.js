const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'tp_mongodb';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');

  const db = client.db(dbName);
  const collection = db.collection('documents');

  // Insert multiple documents
  const insertResult = await collection.insertMany([
    { name: 'Alice', age: 25, city: 'Paris' },
    { name: 'Bob', age: 30, city: 'Lyon' },
    { name: 'Charlie', age: 35, city: 'Marseille' }
  ]);
  console.log('Inserted documents =>', insertResult);

  // Find all documents
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  // Find documents with age > 25
  const queryResult = await collection.find({ age: { $gt: 25 } }).toArray();
  console.log('Documents with age > 25 =>', queryResult);

  // Update a document
  const updateResult = await collection.updateOne({ name: 'Alice' }, { $set: { age: 26 } });
  console.log('Updated document =>', updateResult);

  // Delete a document
  const deleteResult = await collection.deleteOne({ name: 'Charlie' });
  console.log('Deleted document =>', deleteResult);

  // Find remaining documents
  const finalResult = await collection.find({}).toArray();
  console.log('Final documents =>', finalResult);

  return 'TP MongoDB terminé.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());