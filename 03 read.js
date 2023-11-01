// READ operation
// Refer Query Documentation of MongoDB database.

// Fetch all documents
db.inventory.find() // Fetches all documents. If you paste it in MongoDB shell, you will see all the data.
db.inventory.find({}) // Fetches all documents. Both are the same.

// Selection based on quantity
db.inventory.find({qty: 25}) // Retrieves documents where the quantity is 25.

// Selection based on tags using the $in operator
db.inventory.find({ tags: { $in: ["gell", "blue"] } }) 
// Retrieves documents where tags contain "gell" or "blue". Here the $in operation is being used.

// AND operation
// Retrieves documents where status equals "A" and quantity is less than 30
db.inventory.find({ status: "A", qty: { $lt: 30 } })

// OR operation
// Retrieves documents where status equals "A" or quantity is less than 30
db.inventory.find({ $or: [{ status: "A" }, { qty: { $lt: 30 } }] })

// Retrieves only one document matching the criteria
// Use findOne when you expect only one document as output
db.inventory.findOne({ tags: { $in: ["gell", "blue"] } })

// Refer to more documentation for detailed examples.
