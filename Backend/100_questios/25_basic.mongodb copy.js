

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

// 26. Find products whose price is greater than 1000.
db.products.find(
  { price: { $gt: 1000 } }
)

// 27. Find products whose price is between 500 and 2000.
db.products.find(
  { price: { $gt: 500, $lt: 2000 } }
)


// 28. Find products that belong to category "electronics".
db.products.find({ category: "electronics" })

// 29. Find products whose stock is less than 10.
db.products.find(
  { stock: { $lt: 10 } }
)

// 30. Find products that are out of stock.
db.products.find({
  stock: 0
})

// 31. Find products sorted by price (low to high).
db.products.find({}).sort({ productPrice: 1 })


// 32. Find top 5 most expensive products.
db.products.find({}).sort({ productPrice: -1 }).limit(5)

// 33. Find products whose name contains "phone".
db.products.find({
  name: /phone/
})

// 34. Find products whose discount is greater than 20%.
db.products.find(
  {discount : { $gt: 20}}
)

// 35. Find products that do not belong to electronics category.
db.products.find(
  {category : {$nin : ["electronics"]}}
)

// 36. Find products having tag "gaming".


// 37. Find products that have both "gaming" and "laptop" tags.


// 38. Find products having exactly 3 tags.


// 39. Add a new tag "new" to a product.


// 40. Remove tag "old" from a product.


// 41. Find all orders placed by user Rahul.


// 42. Find orders whose total amount > 5000.
db.orders.find({ totalAmount: { $gt: 5000 } })

// 43. Find orders placed after 1 Jan 2025.
db.orders.find(
  { orderDate: { $gt: new Date('2025-01-01') } }
)

// 44. Find orders with status = delivered.
db.orders.find(
  { status: 'delivered' }
)

// 45. Find orders with status not equal to cancelled.
db.orders.find({
  status: { $ne: 'cancelled' }
})

// 46. Increase product price by 10%.
db.products.updateMany(
  {},
  { $mul: { price: 1.1 } }
)

// 47. Increase product stock by 50.
db.products.updateMany(
  {},
  { $inc: { stock: 50 } }
)

// 48. Rename field price → productPrice.
db.products.updateMany(
  {},
  { $rename: { price: "productPrice" } }
)

// 49. Remove discount field from product.
db.products.updateMany(
  {},
  { $unset: { discount: 0 } }
)

// 50. Add field featured: true to product.
db.products.updateMany(
  {},
  { $set: { featured: true } }
)

// 51. Delete products whose stock is 0.
db.products.deleteMany({ stock: 0 })

// 52. Delete users who never placed any order.
db.users.find({ _id: ObjectId('6a900504c9bfb526f1abc150') })

// 53. Delete orders older than 5 years.
db.orders.deleteMany({
  orderDate: { $lte: new Date(new Date().setFullYear(new Date().getFullYear() - 5)) }
})

// 54. Increase view count of a blog post by 1.
db.blogs.updateMany(
  {},
  { $inc: { views: 1 } }
)

// 55. Add new comment to blog post.
db.blogs.updateOne(
  {},
  { $push: { comments: { commentId: 4, user: "Avinash", text: "Bahur hi acha hai leaning ke liye bahut acha hai" } } }
)

// 56. Remove a specific comment.
db.blogs.updateMany(
  { title: 'Introduction to MongoDB' },
  { $pull: { comments: { commentId: 4 } } }
)

// 57. Add product to user wishlist.
db.users1.updateMany(
  { name: "Neha" },
  { $push: { wishlist: { _id: ObjectId('6a90044dc9bfb526f1abc128') } } }
)

// 58. Remove product from wishlist.
db.users1.updateMany(
  { name: "Neha" },
  { $pull: { wishlist: { _id: ObjectId('6a90044dc9bfb526f1abc128') } } }
)

// 59. Add item to shopping cart.


// 60. Remove item from cart.

// 61. Find products reviewed by Rahul.
db.products.find({
  "reviews.user": "Rahul",
  "reviews.rating": 5
})
// 62. Find products where Rahul gave rating 5.
db.products.find({
  reviews: {
    $elemMatch: {
      user: "Rahul",
      rating: 5
    }
  }
})
// 63. Find products having rating greater than or equal to 4.
db.products.find(
  { 'reviews.rating': { $gte: 4 } }
)

// 64. Find products where the same review document has rating ≥ 4.
// 65. Find products having more than 5 reviews.
// 66. Find products whose price is greater than 5000 and stock less than 10.
// 67. Find products whose discount is between 10 and 30.
// 68. Find products whose name starts with "G".
// 69. Find products whose name ends with "Laptop".
// 70. Find products containing "gaming" tag.
// 71. Find products having both "gaming" and "electronics" tags.
// 72. Find products having exactly 3 tags.
// 73. Find products where stock is an even number.
// 74. Find products whose name length is greater than 10 characters.
// 75. Find products where discount field exists.
// 76. Add a new review to a product.
// 77. Update the rating of Rahul’s review.
// 78. Remove review written by Amit.
// 79. Add multiple tags to a product.
// 80. Remove tag "gaming" from a product.
// 81. Remove multiple tags from a product.
// 82. Find products where ANY review has rating < 3
// 83. Find products where SAME review has rating < 3.
// 84. Find products where ALL reviews rating ≥ 4.
// 85. Find products where Rahul exists in reviews.
// 86. Find products where Rahul reviewed AND rating < 3 (same review).
// 87. Find products with highest stock.
// 88. 88. Add tag "sale" where discount > 20.
// 89. Add review only if product has less than 5 reviews.
// 90. Find products where price > stock.
// 91. Find products where discount is missing OR 0.
// 92. Find products where name length > category length.
// 93. Find products having price between 10000 and 40000 and out.
// 94. Find users with empty wishlist.
// 95. Find orders where amount > 10000 and status delivered.
// 96. Find products where stock is between 5 and 20 but not 10.
// 97. Find products where either discount > 20 OR stock < 5.
// 98. Find products where tags include "gaming" but not "mobile".
// 99. Find products where review count > 2 and < 5.
// 100. Find products where no review has rating < 3.