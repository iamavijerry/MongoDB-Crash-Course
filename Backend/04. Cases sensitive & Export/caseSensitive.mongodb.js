
// // use terminal for this 

// // database name is case sensitive
// // collection is not case sensitive

// // shopApp> use test
// // switched to db test
// // test> 
// db.users.insertOne({ name: "AJ" })
// {
//   acknowledged: true,
//     insertedId: ObjectId('6ab4ec55dd077d0709abc114')
// }
// // test> use Test
// // switched to db Test
// // Test> 
// db.users.insertOne({ name: "Muskan" })
// // MongoServerError: db already exists with different case already have: [test] trying to create [Test]
// // Test>  use test
// // switched to db test

// // test> 
// db.Users.insertOne({ name: "Raghav" })
// {
//   acknowledged: true,
//     insertedId: ObjectId('6ab4ed67dd077d0709abc117')
// }
// // test>

// // test> 
// // 
// db.users.insertOne({ name: "rahul", NAME: "Mohit" })
// {
//   acknowledged: true,
//     insertedId: ObjectId('6ab4ee44dd077d0709abc118')
// }
// // test> 
// // 
// db.users.find()

// // result
// [
//   { _id: ObjectId('6ab4ec55dd077d0709abc114'), name: 'AJ' },
//   {
//     _id: ObjectId('6ab4ee44dd077d0709abc118'),
//     name: 'rahul',
//     NAME: 'Mohit'
//   }
// ]
// // Here name and NAME is different
// // test>

// db.users.insertOne({ name: "mahaveer", name: "Yudhveer" })
// //mahaveer will be overrided by Yudhveer 
// {
//   acknowledged: true,
//     insertedId: ObjectId('6ab4eee3dd077d0709abc119')
// }
// // test> 

// db.users.find()
// // result
// [
//   { _id: ObjectId('6ab4ec55dd077d0709abc114'), name: 'AJ' },
//   {
//     _id: ObjectId('6ab4ee44dd077d0709abc118'),
//     name: 'rahul',
//     NAME: 'Mohit'
//   },
//   { _id: ObjectId('6ab4eee3dd077d0709abc119'), name: 'Yudhveer' }
// ]

// // test>


