
students
db.students.insertMany([
  { name: "Rahul", skills: ["HTML", "CSS", "JavaScript"], marks: [70, 80, 90] },
  { name: "Priya", skills: ["Python", "Java"], marks: [60, 75] },
  { name: "Amit", skills: ["JavaScript", "NodeJS", "MongoDB"], marks: [85, 88, 92] }
])
// ese student find karo jiske pass HTML and CSS skills ho 
//jiske pass Javascript and nodejs skills wale students chahiye
// esa student find karo jiske pass 3 skills hai 
//

products
db.products.insertMany([
  {
    name: "Laptop",
    reviews: [{
        user: "Rahul",
        rating: 4
      },
      {
        user: "Amit",
        rating: 5
      }]
  },
  {
    name: "Mobile",
    reviews: [{
      user: "Priya",
      rating: 3
    },
    {
      user: "Ankit",
      rating: 4
    },
    {
      user: "Rahul",
      rating: 5
    }]
  }
])