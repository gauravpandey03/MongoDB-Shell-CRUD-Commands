// Delete Operations

// Delete all documents that match a specified filter.
db.collection.deleteMany();

// Delete all data from the "inventory" collection.
db.inventory.deleteMany({});

// Delete at most a single document that matches a specified filter, even though multiple documents may match the filter.
db.collection.deleteOne();

// Delete the first document from the "inventory" collection that has status "D".
db.inventory.deleteOne({ status: "D" });

// Additional Methods
// The following methods can also delete documents from a collection:
// - db.collection.remove()
//   Delete a single document or all documents that match a specified filter.
