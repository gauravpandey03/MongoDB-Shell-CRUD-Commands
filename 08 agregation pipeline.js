
 **Aggregation Pipeline in MongoDB**

// The aggregation pipeline is a powerful tool in MongoDB for processing and transforming data within collections.

**Pipeline Stages**

// The pipeline consists of multiple stages, each performing a specific operation on the data.

**Example**

// Let's consider a collection of orders where each document represents an order for a pizza.

// We want to find the total quantity of medium-sized pizzas ordered for each pizza type.

**Pipeline Steps**

1. **$match Stage**: Filter documents by pizza size.
   - `{ $match: { size: "medium" } }`
   - This stage filters out only the documents where the pizza size is "medium".

2. **$group Stage**: Group documents by pizza name and calculate total quantity.
   - `{ $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } } }`
   - This stage groups the filtered documents by pizza name (using "$name" field) and calculates the total quantity for each pizza type.

**Result**

// After executing the aggregation pipeline, we get the total quantity of medium-sized pizzas ordered for each pizza type.

// For example:
// { _id: "Margherita", totalQuantity: 20 }
// { _id: "Pepperoni", totalQuantity: 15 }
// { _id: "Vegetarian", totalQuantity: 25 }

**Conclusion**

// The aggregation pipeline allows us to perform complex data analysis and transformation tasks in MongoDB by chaining together multiple stages. It provides a flexible and efficient way to process large volumes of data and derive meaningful insights.



db.orders.aggregate( [

    // Stage 1: Filter pizza order documents by pizza size
    {
       $match: { size: "medium" }
    },
 
    // Stage 2: Group remaining documents by pizza name and calculate total quantity
    {
       $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } }
    }
 
 ] )
