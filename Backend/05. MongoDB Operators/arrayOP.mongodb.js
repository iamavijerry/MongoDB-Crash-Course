use('mydb')

// db.students.insertMany([
//   { name: "Rahul", skills: ["HTML", "CSS", "JavaScript"], marks: [70, 80, 90] },
//   { name: "Priya", skills: ["Python", "Java"], marks: [60, 75] },
//   { name: "Amit", skills: ["JavaScript", "NodeJS", "MongoDB"], marks: [85, 88, 92] }
// ])

db.students.find({
  skills : {$all : ['HTML','CSS']}
})

db.students.find({
 skills : {$all : ["JavaScript", "NodeJS"]}
})


db.students.find({
 skills :  {$size : 3}
})

db.students.find({
 skills : {$in : ['HTML', "CSS", 'JavaScript']}
})

db.students.find({
 skills : {$nin : ['HTML']}
})


// wrong approach
db.products.find(
  {
    'reviews.user' : "Rahul",
    'reviews.rating' : 5
  },
)

db.products.find({
  reviews : {
    $elemMatch : {
      user : "Rahul",
      rating : 5
    }
  }
})

