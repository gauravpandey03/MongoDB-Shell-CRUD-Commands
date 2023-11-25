// Query Modifiers

// Returns the first document found.
db.inventory.find().limit(1);

// Skips the first 2 documents and returns the rest.
db.inventory.find().skip(2);

// Sorts documents in increasing order based on the "qty" field.
db.inventory.find().sort({ qty: 1 });

// Sorts documents in decreasing order based on the "qty" field.
db.inventory.find().sort({ qty: -1 });
