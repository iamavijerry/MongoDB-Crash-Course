
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
  { discount: { $gt: 20 } }
)

// 35. Find products that do not belong to electronics category.
db.products.find(
  { category: { $nin: ["electronics"] } }
)

// 36. Find products having tag "gaming".
db.products.find({
  tags: {
    $in: ['gaming']
  }
})

// 37. Find products that have both "gaming" and "laptop" tags.
db.products.find({
  tags: {
    $in: ['gaming', 'laptop']
  }
})

// 38. Find products having exactly 3 tags.
db.products.find({
  tags: { $size: 3 }
})

// 39. Add a new tag "new" to a product.
db.products.updateMany(
  {},
  {
    $push:
      { tags: 'new' }
  }
)

// 40. Remove tag "new" from a product.
db.products.updateMany(
  {},
  { $pull: { tags: "new" } }
)

// 41. Find all orders placed by user Rahul.
db.orders.find(
  { user: "Rahul" }
)

// 42. Find orders whose total amount > 5000.
db.orders.find({
  amount: { $gt: 5000 }
})

// 43. Find orders placed after 1 Jan 2025.
db.orders.find({
  orderDate: { $gt: new Date('2026-01-01') }
});


// 44. Find orders with status = delivered.
db.orders.find({
  status: "delivered"
});

// 45. Find orders with status not equal to cancelled.
db.orders.find({
  state: { $ne: "cancelled" }
})


// 46. Increase product price by 10%.
db.products.updateMany({}, {
  $mul: { productPrice: 1.1 }
})

db.products.updateMany(
  {},
  { $set: { productPrice: 0 } }
)

// 47. Increase product stock by 50.
db.products.updateMany(
  {},
  { $inc: { stock: 10 } }
)


// 48. Rename field price → productPrice.
db.products.updateMany(
  {},
  { $rename: { price: 'productPrice' } }
)


// 49. Remove discount field from product.
db.products.find(
  { discount: { $exists: true } }
).count()

db.products.updateMany(
  {},
  { $unset: { discount: 0 } }
)

// 50. Add field featured: true to product.
db.products.updateMany(
  {},
  { $unset: { feature: 0 } }
)
db.products.updateMany(
  {},
  { $set: { feature: true } }
)

// 51. Delete products whose stock is 0.
db.products.deleteMany({ stock: { $lt: 1 } })

// 52. Delete users who never placed any order.
// db.users.updateMany(
//   {},
//   {$set : {
//     orders : [],
//     whishList : [],
//     cart : []
//   }}
// )

db.users.deleteMany({
  orders: { $size: 0 }
})

db.users.find().count()

// 53. Delete orders older than 5 years.
db.orders.find({}, { orderDate: 1, _id: 0 })
db.orders.find(
  {
    orderDate: {
      $lt: new Date(new Date().setFullYear(new Date().getFullYear() - 5))
    }
  }
)


// 54. Increase view count of a blog post by 1.
db.blogs.find()
db.blogs.updateMany(
  {},
  { $inc: { views: 1 } }
)

// 55. Add new comment to blog post.
db.blogs.updateMany(
  { title: 'Introduction to MongoDB' },
  {
    $push: {
      comments:
      {
        commantId: 4,
        user: 'Jerry',
        text: 'Very usefull blog'
      },
    }
  }
)

// 56. Remove a specific comment.
db.blogs.updateMany(
  {},
  {
    $pull: {
      comments:
        { commantId: 4 }
    }
  }
)


// 57. Add product to user wishlist.
db.users.find()
db.users.updateMany(
  {},
  { $push: { wishList: "iPhone 18 Pro" } }
)


// 58. Remove product from wishlist.
db.users.updateMany(
  {},
  { $pull: { wishList: "iPhone 18 Pro" } }
)


// 59. Add item to shopping cart.
db.users.updateMany(
  {},
  {
    $push: {
      cart: {
        orderId : 101,
        name: "iPhone 18 Pro"
      }
    }
  }
)

// 60. Remove item from cart.
db.users.updateMany(
  {},
  {
    $pull: {
      cart: {
        orderId : 101,
        name: "iPhone 18 Pro"
      }
    }
  }
)

