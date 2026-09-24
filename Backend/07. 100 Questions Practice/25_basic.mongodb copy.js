

// 1. Find all users from Delhi.
db.users.find({ city: "Delhi" });

// 2. Find users whose age is greater than 25
db.users.find({ age: { $gt: 25 } });

// 3. Find users whose age is less than or equal to 30.
db.users.find({ age: { $lte: 30 } });

// 4. Find users whose city is not Mumbai.
db.users.find({ city: { $ne: "Mumbai" } })

// 5. Find users whose age is between 20 and 30.
db.users.find({
  $and: [
    { age: { $gt: 20 } },
    { age: { $lt: 30 } }
  ]
})

db.users.find({
  age: { $gt: 20, $lt: 30 }
})

// 6. Show only name and email of all users.
db.users.find({}, { _id: 0, email: 1, name: 1 })

// 7. Find users whose name starts with "R".
db.users.find({
  name: { $regex: '^R' }
});

db.users.find({ name: /^R/ })

// 8. Find users whose email contains gmail.
db.users.find({
  email: {}
})

// 9. Find users whose city field exists.
db.users.find({ city: { $exists } })

// 10. Find users whose phone field does not exist.
db.users.find({ phone: { $exists: false } })

// 11. Sort users by age ascending.
db.users.find({}).sort({ age: 1 })

// 12. Sort users by age descending.
db.users.find({}).sort({ age: -1 })

// 13. Show only first 5 users.
db.users.find({}).limit(5)

// 14. Skip first 10 users and show next 5 users.
db.users.find({}).skip(10)

// 15. Find users whose age is either 20, 25, or 30.
db.users.find({
  age: { $in: [20, 25, 30] }
})

// 16. Find users whose age is not 20, 25, 30.
db.users.find({
  age: { $nin: [20, 25, 30] }
})

// 17. Count total users in database.
db.users.find().count()
db.users.countDocuments()

// 18. Find users whose name is Rahul Sharma and city is Delhi.
db.usres.find({
  name: 'Rahul Sharma',
  city: "Delhi"
})

// 19. Find users whose city is Delhi OR Mumbai.
db.users.find({
  city: { $in: ['Delhi', 'Mumbai'] }
})

// 20. Find users whose age is not greater than 30.
db.users.find({
  age: { $lt: 30 }
})

// 21. Find users whose name ends with "a".
db.users.find({
  name: /a$/
})

// 22. Find users whose email domain is yahoo.com.
db.users.find({
  email: /gmail\.com$/
})

// 23. Find users whose age field type is number.
db.users.find({
  age: { $type: "number" }
})

// 24. Find users where age is even.
db.users.find({
  age: { $mod: [2, 1] }
})

// 25. Find users whose name length is greater than 5 characters.
db.users.find({
  $expr: {
    $gt: [
      { $strLenCP: '$name' },
      5
    ]
  }
})
