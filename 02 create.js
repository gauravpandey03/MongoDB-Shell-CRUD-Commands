// Take the reference from MongoDB documentation for the latest version.
// This is for current version 7.

// Command to create a document in the MongoDB database using MongoDB Shell.
// db: database name.
// inventory: collection name.

// Insert a Single Document
// Reference: https://www.mongodb.com/docs/manual/tutorial/insert-documents/#insert-a-single-document
db.inventory.insertOne({ 
   item: "canvas", 
   qty: 100, 
   tags: ["cotton"], 
   size: { 
       h: 28, 
       w: 35.5, 
       uom: "cm" 
   } 
});

// Insert Multiple Documents
// Reference: https://www.mongodb.com/docs/manual/tutorial/insert-documents/#insert-multiple-documents
db.inventory.insertMany([
   { 
       item: "journal", 
       qty: 25, 
       tags: ["blank", "red"], 
       size: { 
           h: 14, 
           w: 21, 
           uom: "cm" 
       } 
   },
   { 
       item: "mat", 
       qty: 85, 
       tags: ["gray"], 
       size: { 
           h: 27.9, 
           w: 35.5, 
           uom: "cm" 
       } 
   },
   { 
       item: "mousepad", 
       qty: 25, 
       tags: ["gel", "blue"], 
       size: { 
           h: 19, 
           w: 22.85, 
           uom: "cm" 
       } 
   }
]);

// Additional Methods for Inserts
// The following methods can also add new documents to a collection:
// - db.collection.updateOne() when used with the upsert: true option.
// - db.collection.updateMany() when used with the upsert: true option.
// - db.collection.findAndModify() when used with the upsert: true option.
// - db.collection.findOneAndUpdate() when used with the upsert: true option.
// - db.collection.findOneAndReplace() when used with the upsert: true option.
// - db.collection.bulkWrite().
