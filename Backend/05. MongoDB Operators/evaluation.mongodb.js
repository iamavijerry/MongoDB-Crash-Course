use('mydb')

db.employees.insertMany([
  { name: "Amit", salary: 50000, bonus: 4000 },
  { name: "Manav", salary: 10000, bonus: 1000 },
  { name: "Anshul", salary: 30000, bonus: 2000 }
]);


db.employees.find(
  {
    $expr: {
      $gt: ['$salary', '$bonus']
    }
  }
);

db.employees.find(
  {
    $expr: {
      $gt: [
        { $add: ['$salary', '$bonus'] },
        60000
      ]
    }




  }
);

db.products.find(
  {
    discountPrice: { $exists: true },
    $expr: {
      $gt: ['$price', '$discountPrice']
    }
  }
);


db.products.find(
  {
    discountPrice: { $exists: true },
    $expr: {
      $gt: ['$discountPrice', '$price']
    }
  }
)


//stock is greater than sold
db.orders.find(
  {
    $expr: {
      $gt: ['$stock', '$sold']
    }
  }
)

//sold is greater than stock
db.orders.find(
  {
    $expr: {
      $gt: ['$sold', '$stock']
    }
  }
)

// maths is gt science
db.students.find(
  {
    $expr: {
      $gt: ['$maths', '$science']
    }
  }
)

//science is gt maths
db.students.find(
  {
    $expr: {
      $gt: ['$science', '$maths']
    }
  }
)


db.students.find({
  name: { $regex: 'avi' }
})

db.students.find({
  name: { $regex: 'ravi' } //case sensitive
})

db.students.find({
  name: { $regex: '^R' } // R in starting of name
})

db.students.find({
  name: { $regex: 'a$' } // a in last 
})

db.students.find({
  name: { $regex: '^r', $options: 'i' } // case sensitive removed
})

db.students.find({
  name: { $regex: '^r', $options: 'i' }
})

db.students.find({
  name: /^r/i
})

db.students.find({
  name: /pooja/i
})

// db.numbers.insertMany([
//   { value: 10 },
//   { value: 2 },
//   { value: 5 },
//   { value: 3 },
//   { value: 13 },
//   { value: 200 },
//   { value: 215 },
// ])




db.numbers.find({
  value :{$mod : [2, 0]}
})

db.numbers.find({
  value :{$mod : [2, 1]}
})


