**MongoDB Commands on Mongo Shell**

**1. show dbs**
   - Description: Used to display all the created databases.
   - Example:
     ```
     > show dbs
     admin       0.000GB
     local       0.000GB
     myDatabase  0.000GB
     ```

**2. use database_name**
   - Description: Switches to the specified database for performing operations.
   - Example:
     ```
     > use myDatabase
     switched to db myDatabase
     ```

**CRUD Operations:**

**3. Create (C) Operation**
   - Description: Inserts new documents into a collection.
   - Example:
     ```
     > db.products.insertOne({ name: "Laptop", price: 1200 })
     ```

**4. Read (R) Operation**
   - Description: Retrieves documents from a collection.
   - Example:
     ```
     > db.products.find()
     ```

**5. Update (U) Operation**
   - Description: Modifies existing documents in a collection.
   - Example:
     ```
     > db.products.updateOne({ name: "Laptop" }, { $set: { price: 1500 } })
     ```

**6. Delete (D) Operation**
   - Description: Removes documents from a collection.
   - Example:
     ```
     > db.products.deleteOne({ name: "Laptop" })
     ```

**Note**: MongoDB follows the CRUD paradigm: Create, Read, Update, and Delete operations for managing data.




give me in the format so that
 i can paste on file exactly  and 
 make it proper notes of it simple 
 with more and more example in it  