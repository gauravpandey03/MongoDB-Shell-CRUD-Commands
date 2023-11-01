// Fresh data for update query
db.inventory.insertMany([
    { item: "canvas", qty: 100, size: { h: 28, w: 35.5, uom: "cm" }, status: "A" },
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "mat", qty: 85, size: { h: 27.9, w: 35.5, uom: "cm" }, status: "A" },
    { item: "mousepad", qty: 25, size: { h: 19, w: 22.85, uom: "cm" }, status: "P" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
    { item: "sketchbook", qty: 80, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "sketch pad", qty: 95, size: { h: 22.85, w: 30.5, uom: "cm" }, status: "A" }
]);

// Update Operations

// Updates at most a single document that match a specified filter even though multiple documents may match the specified filter.
db.collection.updateOne(
    <filter>,
    { $set: { status: "D" }, $inc: { quantity: 2 } },
    ...
);

// Update all documents that match a specified filter.
db.collection.updateMany(
    <filter>,
    { $set: { status: "D" }, $inc: { quantity: 2 } },
    ...
);

// Replaces at most a single document that match a specified filter even though multiple documents may match the specified filter.
db.collection.replaceOne(
    <filter>,
    <replacement>,
    {
        upsert: <boolean>,
        writeConcern: <document>,
        collation: <document>,
        hint: <document|string>                   // Available starting in 4.2.1
    }
);

// Additional Methods
// The following methods can also update documents from a collection:
// - db.collection.findOneAndReplace().
// - db.collection.findOneAndUpdate().
// - db.collection.findAndModify().
// - db.collection.bulkWrite().

// Refer to the documentation for more details.
