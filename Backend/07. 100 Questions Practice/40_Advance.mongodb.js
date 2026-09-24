
// 61. Find products reviewed by Rahul.
db.products.find({
  "reviews.user": "Rahul",
  "reviews.rating": 5
});


// 62. Find products where Rahul gave rating 5.
db.products.find({
  reviews: {
    $elemMatch: {
      user: "Rahul",
      rating: 5
    }
  }
});

// 63. Find products having rating greater than or equal to 4.
db.products.find({
  "reviews.rating": { $gte: 4 }
});


// 64. Find products where the same review document has rating ≥ 4.
db.products.find({
  reviews: {
    $elemMatch: {
      rating: { $gte: 4 }
    }
  }
});

// 65. Find products having more than 5 reviews.
db.products.find({
  reviews: { $size: 5 }
});

// 66. Find products whose price is greater than 5000 and stock less than 10.
db.products.find(
  {
    $and: [
      { priceInPesa: { $gt: 500000 } },
      { stock: { $lt: 20 } }
    ]
  }
);

// 67. Find products whose discount is between 10 and 30.
db.products.find(
  { discount: { $gt: 10, $lt: 30 } }
);

// 68. Find products whose name starts with "G".
db.products.find(
  { name: /^G/ }
);

// 69. Find products whose name ends with "Laptop".
db.products.find({
  name: /Laptop$/
});

// 70. Find products containing "gaming" tag.
db.products.find({
  tags: {
    $in: ['gaming']
  }
});


// 71. Find products having both "gaming" and "electronics" tags.
db.products.find({
  tags: {
    $in: ['gaming', 'electronics']
  }
});


// 72. Find products having exactly 3 tags.
db.products.find({
  tags: { $size: 3 }
});


// 73. Find products where stock is an even number.
db.products.find({
  stock: { $mod: [2, 0] }
});

// 74. Find products whose name length is greater than 10 characters.
db.products.find({
  $expr: {
    $gt: [
      { $strLenCP: "$name" },
      10
    ]
  }
});

// 75. Find products where discount field exists.
db.products.find({
  discount: { $exists: false }
});

// 76. Add a new review to a product.
db.products.find()
db.products.updateOne(
  { _id: ObjectId('6a90f8e1c9bfb526f1abc15a') },
  {
    $push: {
      reviews:
        { user: "Jerry", rating: 5, comment: "Very Powerful Gaming laptop" }
    }
  }
);

// 77. Update the rating of Rahul’s review.
db.products.updateMany(
  { 'reviews.user': 'Rahul' },
  {
    $set: {
      'reviews.$.rating': 0
    }
  }
);


// 78. Remove review written by Amit.
db.products.find({
  reviews: {
    $elemMatch: {
      user: "Amit"
    }
  }
});

db.products.updateOne(
  { _id: ObjectId('6a90f8e1c9bfb526f1abc166') },
  {
    $pull: {
      reviews: { user: "Amit" }
    }
  }
);


// 79. Add multiple tags to a product.
db.products.updateMany(
  { _id: ObjectId('6a90f8e1c9bfb526f1abc166') },
  {
    $addToSet: {
      tags: { $each: ['tag1', 'tag2'] }
    }
  }
);

// 80. Remove tag "gaming" from a product.
db.products.updateMany(
  { _id: ObjectId('6a90f8e1c9bfb526f1abc166') },
  {
    $pull: {
      tags: 'gaming'
    }
  }
);

// 81. Remove multiple tags from a product.
db.products.updateMany(
  { _id: ObjectId('6a90f8e1c9bfb526f1abc166') },

  {
    $pull: {
      tags: { $in: ['tag1', 'tag2'] }
    }
  }
);

// 82. Find products where ANY review has rating < 3
db.products.find({
  'reviews.rating': { $lt: 3 }
});

// 83. Find products where SAME review has rating < 3.
db.products.find({
  reviews: {
    $elemMatch: {
      rating: { $lt: 3 }
    }
  }
});

// 84. Find products where ALL reviews rating ≥ 4.
db.products.find(
  {
    reviews: {
      $elemMatch: {
        rating: { $gte: 4 }
      }
    }
  }
);

// 85. Find products where Rahul exists in reviews.
db.products.find({
  'reviews.user': 'Rahul'
});

// 86. Find products where Amit reviewed AND rating < 3 (same review).
db.products.find({
  reviews: {
    $elemMatch: {
      user: "Amit",
      rating: { $lt: 3 }
    }
  }
});

// 87. Find products with highest stock.
db.products.find({}).sort({ stock: -1 }).limit(1);


// 88. Add tag "sale" where discount > 20.
db.products.updateMany(
  { discount: { $gt: 20 } },
  {
    $push: {
      tags: 'sale'
    }
  }
)

// db.products.updateMany(
//   {},
//   [
//     {
//       $set: {
//         discount: {
//           $floor: {
//             $add: [
//               { $multiply: [{ $rand: {} }, 46] },
//               5
//             ]
//           }
//         }
//       }
//     }
//   ]
// )

// 89. Add review only if product has less than 5 reviews.
db.products.updateMany(
  {
    reviews: { $type: 'array' },
    $expr: {
      $lt: [{ $size: '$reviews' }, 5]
    }
  },
  {
    $push: {
      reviews: {
        user: "Bohemia", rating: 5, comment: "Nice Product"
      }
    }
  }
)


db.products.find(
  {
    reviews: { $type: 'array' },
    $expr: {
      $lt: [{ $size: '$reviews' }, 5]
    }
  }
)

// 90. Find products where price > stock.
db.products.find(
  {
    $expr: {
      $gt: ['$price', '$stock']
    }
  }
)

// 91. Find products where discount is missing OR 0.
db.products.find(
  {
    $or: [
      { discount: { $exists: false } },
      { discount: 0 }
    ]
  }
)

// 92. Find products where name length > category length.
db.products.find(
  {
    $expr: {
      $gt: [{ $strLenCP: '$name' }, { $strLenCP: '$category' }]
    }
  }
)

// 93. Find products having price between 10000 and 40000 and out.
db.products.find()
db.products.find({
  priceInPesa: { $gt: 10000, $lt: 4000000 }, stock: 0
})

// 94. Find users with empty wishlist.
db.users.find()
db.users.find({
  wishList: { $size: 0 }
})

// 95. Find orders where amount > 10000 and status delivered.

db.orders.find()
db.orders.find({
  $and: [
    { amount: { $gt: 10000 } },
    { status: 'delivered' }
  ]
})

// 96. Find products where stock is between 5 and 20 but not 10.
db.products.find({
  stock: { $in: [5, 20] }
})

// 97. Find products where either discount > 20 OR stock < 5.
db.products.find({
  $or: [
    { discount: { $gt: 20 } },
    { stock: { $lt: 5 } }
  ]
})

// 98. Find products where tags include "gaming" but not "mobile".
db.products.find({
  tags: { $in: ['gaming'], $nin: ['mobile'] }
})

// 99. Find products where review count > 2 and < 5.
db.products.find({
  reviews : {$type : 'array'},
  $expr: {
    $and : [
      {$gt : [{$size : '$reviews'}, 2]},
     { $lt : [{$size : '$reviews'}, 5]}
    ]
  }
})

// 100. Find products where no review has rating < 3.
db.products.find({
  'reviews.rating' : {$gte : 3}
})