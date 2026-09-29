use('mydb')

db.users.createIndex({name : 1})
db.users.getIndexes()

db.users.find({id : 6}).explain('executionStats')
db.users.find({ _id: ObjectId('6ab4fcf7ac135aed3700da95')}).explain('executionStats')

db.users.find({name : 'Glenna Reichert' }).explain('executionStats')

db.users.dropIndex({name : 1})

db.users.createIndex({name : 1, age : 1})

db.users.find(
  {name : "Meena", age : 30}
)

db.users.find(
  {name : "Meena"}
).explain('executionStats')

db.users.find(
  {age : 30}
).explain('executionStats')


db.users.createIndex({name : 1})
db.users.createIndex({age : 1})


// Multiple key indexing
db.products.find()
db.products.createIndex({tags : 1})
db.products.getIndexes()
db.products.find({tags : 'gaming'}).explain('executionStats')

db.products.createIndex({reviews : 1})

db.products.find({
  'reviews.user' : "Rahul"
})

db.products.createIndex({'reviews.user' : 1})

db.products.createIndex({'reviews.user' : 1, 'reviews.rating' : 1})

db.products.dropIndex({tags : 1})

// Text Index

// db.blogs.insertMany([
//   {
//     title: "Learn MongoDB Indexing",
//     content: "MongoDB indexing improves query performance and speed",
//     tags: ["mongodb", "database", "index"],
//     author: "Manas Kumar",
//     language: "english"
//   },
//   {
//     title: "Introduction to JavaScript",
//     content: "JavaScript is a popular programming language used to build interactive web applications",
//     tags: ["javascript", "programming", "web"],
//     author: "Rahul Sharma",
//     language: "english"
//   },
//   {
//     title: "Understanding React Components",
//     content: "React components help developers build reusable and maintainable user interfaces",
//     tags: ["react", "javascript", "frontend"],
//     author: "Priya Singh",
//     language: "english"
//   },
//   {
//     title: "Getting Started with Node.js",
//     content: "Node.js allows JavaScript to run on the server and is commonly used for backend development",
//     tags: ["nodejs", "backend", "javascript"],
//     author: "Aman Verma",
//     language: "english"
//   },
//   {
//     title: "Learn SQL Queries",
//     content: "SQL queries are used to retrieve and manage data stored in relational databases",
//     tags: ["sql", "database", "queries"],
//     author: "Neha Gupta",
//     language: "english"
//   },
//   {
//     title: "Understanding REST APIs",
//     content: "REST APIs allow different applications to communicate and exchange data over HTTP",
//     tags: ["api", "rest", "backend"],
//     author: "Vikas Mehta",
//     language: "english"
//   },
//   {
//     title: "Git and Version Control",
//     content: "Git helps developers track code changes and collaborate efficiently on software projects",
//     tags: ["git", "github", "version-control"],
//     author: "Rohan Patel",
//     language: "english"
//   },
//   {
//     title: "Introduction to Docker",
//     content: "Docker packages applications and their dependencies into portable containers",
//     tags: ["docker", "containers", "devops"],
//     author: "Ankit Joshi",
//     language: "english"
//   },
//   {
//     title: "Learn Python Basics",
//     content: "Python is a beginner-friendly programming language used in web development, automation, and data science",
//     tags: ["python", "programming", "coding"],
//     author: "Sneha Kapoor",
//     language: "english"
//   },
//   {
//     title: "Understanding Database Design",
//     content: "Good database design helps organize data efficiently and reduces unnecessary duplication",
//     tags: ["database", "design", "backend"],
//     author: "Arjun Malhotra",
//     language: "english"
//   }
// ])

db.blogs.find()

db.blogs.createIndex({title : 'text'})
db.blogs.dropIndex({title : 'text'})
db.dropIndex()

db.blogs.find({
  $text : {$search : "mongodb"}
})


db.blogs.find({
  $text : {$search : 'mongodb'}
}, {
  myScore : {$meta : 'textScore'}
})

db.blogs.createIndex(
  {
    title : 'text',
    content : 'text',
    tags : 'text',
  },
  {
    weight : {
    title : 1,
    content : 2,
    tags : 10
    }
  },
)







































