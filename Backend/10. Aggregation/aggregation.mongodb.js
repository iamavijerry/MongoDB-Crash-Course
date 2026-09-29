// db.products.find({brand : "Chanel"}, {brand : 1, _id  : 0})


// // this is simple way to find data
// db.products.find(
//   {},
//   {brand : 1, price : 1, _id : 0, category : 1}
// )

db.products.aggregate([
  { $match: { } },
  {
    $project: {
      brand : 1, price : 1, _id : 0, category : 1
    }
  },
  {
    $sort: {
      price: -1
    }
  },
])

// db.products.aggregate([
//   {$match: {
//     category : 'electronics'
//   }},

//   {
//     $project: {
//       name : 1, category : 1, price : 1, reviews : 1, _id : 0,

//      avgRating : {
//       $round : [
//         {$avg : '$reviews.rating'}, 1
//       ]
//      }  
//     }
//   }
// ])

// db.products.aggregate([
//   {    $match: {} },
//   {
//     $project: {
//       name : 1,
//       price : 1,
//       priceInPesa: 1, 
//       _id : 0,

//       avgrating : {
//         $round : [
//           {$avg : '$reviews.rating'},
//           2
//         ]
//       }
//     }
//   },
//   {$sort : {price : -1}},
// ])

// // Last 24 hour revenue calculate
// db.products.aggregate([
//   {$match : {category : 'electronics'}},
//   {$project : {name : 1, _id : 0}}
// ]);

use('alpha')

// Group in categories and find with specific field
db.products.aggregate([
  {
    $group : {
      _id : '$category',
      productDetails : {
        $push : {
          productName : '$name',
          productPrice : '$priceInPesa'
        }
      },
    }
  },
])


// sum of all category in pesa
db.products.aggregate([
   {
     $group : {
       _id : '$category',
       total : {
         $sum : '$priceInPesa'
       }
     }
   },
])

// sum of all category in rupees (ny devide by 100)
db.products.aggregate([
  {
    $group : {
      _id : '$category',
      total : {
        $sum :{$divide : ['$priceInPesa', 100]}
      }     
    }
  },
])

db.products.aggregate([
 { $match :{ reviews  : {$exists : true}}},

  {
    $project: {
      name : 1,
      reviews : 1,
      priceInPesa : 1,
      _id : 0,

      productName : {
       $toUpper : '$name',
      },

      price : {
        $divide : ['$priceInPesa', 100]
      },

      AvgRating : {
        $round : [
          {
            $avg : '$reviews.rating'
          }
        ]
      },

      ratingCount : {
        $size : '$reviews'
      },
    }
  },
  {
    $sort : {
      price : 1
      // price : -1
    }
  }
])


// Orders


db.orders.aggregate([

  {$match: {
    userId : {$exists : true}
  }},

  {
    $project: {
      totalAmount : 0
    }
  },

  {
    $lookup: {
      from: 'products',
      localField: 'products.productId' ,
      foreignField: '_id',
      as: 'productDetail'
    }
  },
])

// unwind 
//  Array ke elements ke size ke acording utne hi documents ban jaate hai 


db.products.aggregate([
  {
    $unwind: '$tags'
  }
])


// find  24 hr revenue 

