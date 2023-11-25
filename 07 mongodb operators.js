**Operators**

**Query and Projection Operators**

//Query operators help locate data within the database, while projection operators modify how data is presented.

*Update Operators*

//These enable modification or addition of data within the database.

*Aggregation Stages*

//Various stages available for the Aggregation Pipeline.

*Aggregation Operators*

//Operators used to define and manipulate documents within aggregation pipeline stages.

**Query Selectors**

**Comparison**

//These operators facilitate comparison of BSON type values.

- **$eq**: Matches values equal to a specified value.
  - Example: `{ age: { $eq: 30 } }`

- **$gt**: Matches values greater than a specified value.
  - Example: `{ score: { $gt: 80 } }`

- **$gte**: Matches values greater than or equal to a specified value.
  - Example: `{ price: { $gte: 100 } }`

- **$in**: Matches any value specified in an array.
  - Example: `{ country: { $in: ["USA", "Canada"] } }`

- **$lt**: Matches values less than a specified value.
  - Example: `{ age: { $lt: 40 } }`

- **$lte**: Matches values less than or equal to a specified value.
  - Example: `{ quantity: { $lte: 10 } }`

- **$ne**: Matches values not equal to a specified value.
  - Example: `{ status: { $ne: "inactive" } }`

- **$nin**: Matches none of the values specified in an array.
  - Example: `{ category: { $nin: ["Electronics", "Clothing"] } }`

**Logical**

//These operators join query clauses logically.

- **$and**: Returns documents matching conditions of both clauses.
  - Example: `{ $and: [{ age: { $gt: 20 } }, { age: { $lt: 30 } }] }`

- **$not**: Inverts the effect of a query expression.
  - Example: `{ $not: { status: "inactive" } }`

- **$nor**: Returns documents failing to match both clauses.
  - Example: `{ $nor: [{ age: { $lt: 18 } }, { status: "inactive" }] }`

- **$or**: Returns documents matching conditions of either clause.
  - Example: `{ $or: [{ category: "Electronics" }, { category: "Clothing" }] }`

**Element**

Operators for selecting documents based on element existence and type.

- **$exists**: Matches documents with the specified field.
  - Example: `{ name: { $exists: true } }`

- **$type**: Selects documents if a field is of the specified type.
  - Example: `{ age: { $type: "number" } }`

**Evaluation**

Operators for evaluating expressions within the query language.

- **$expr**: Allows use of aggregation expressions within the query language.
  - Example: `{ $expr: { $gt: ["$qty", "$minQty"] } }`

- **$jsonSchema**: Validates documents against the given JSON Schema.

- **$mod**: Performs a modulo operation on the field value.
  - Example: `{ num: { $mod: [5, 0] } }`

- **$regex**: Selects documents where values match a specified regular expression.
  - Example: `{ name: { $regex: "^A" } }`

- **$text**: Performs text search.
  
- **$where**: Matches documents that satisfy a JavaScript expression.
  - Example: `{ $where: "this.score >= 80" }`

**Geospatial**

Operators for geospatial queries.

- **$geoIntersects**: Selects geometries intersecting with a GeoJSON geometry.
  
- **$geoWithin**: Selects geometries within a bounding GeoJSON geometry.
  
- **$near**: Returns geospatial objects in proximity to a point.

- **$nearSphere**: Returns geospatial objects in proximity to a point on a sphere.

**Array**

Operators for querying arrays.

- **$all**: Matches arrays containing all specified elements.
  - Example: `{ tags: { $all: ["movie", "drama"] } }`

- **$elemMatch**: Selects documents if element in the array field matches all specified conditions.
  - Example: `{ grades: { $elemMatch: { $gte: 80, $lt: 90 } } }`

- **$size**: Selects documents if the array field is a specified size.
  - Example: `{ scores: { $size: 3 } }`

**Bitwise**

Operators for bitwise operations.

- **$bitsAllClear**: Matches values where a set of bit positions all have a value of 0.
  
- **$bitsAllSet**: Matches values where a set of bit positions all have a value of 1.
  
- **$bitsAnyClear**: Matches values where any bit from a set of bit positions has a value of 0.
  
- **$bitsAnySet**: Matches values where any bit from a set of bit positions has a value of 1.

**Projection Operators**

Operators for modifying the presentation of data.

- **$**: Projects the first element in an array that matches the query condition.
  
- **$elemMatch**: Projects the first element in an array that matches the specified condition.
  
- **$meta**: Projects the document's score assigned during $text operation.
  
- **$slice**: Limits the number of elements projected from an array, supports skip and limit slices.

**Miscellaneous Operators**

- **$comment**: Adds a comment to a query predicate.
  
- **$rand**: Generates a random float between 0 and 1.