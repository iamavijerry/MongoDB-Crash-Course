// ***********QUESTIONS***************
// Q.1 Find total sales of each category
// Q.2 Find top spending customer
// Q.3 Show all products bought by each customer
// Q.4 Find customers who spent more than 50,000
// Q.5 Find most sold product
// Q.6 Create pagination using aggregation
// Q.7 Find average order value per city

/* Q.8 Create analytics dashboard data.
        For each category:
            total products sold
            total revenue
            average price
*/

// Q.9 Join users and orders using $lookup
// Q.10 Find users having no orders

db.orders.aggregate([
  {
    $unwind: "$products",
  },

  {
    $group: {
      _id: "$products.category",
      totalSale: {
        $sum: {
          $multiply: ["$products.quantity", "$products.price"],
        },
      },
    },
  },
]);

db.orders.aggregate([
  {
    $unwind: "$products",
  },

  {
    $group: {
      _id: "$customer",
      mostSpented: {
        $sum: {
          $multiply: ["$products.price", "$products.quantity"],
        },
      },
    },
  },

  {
    $sort: {
      mostSpented: -1,
    },
  },

  {
    $limit: 1, // Top 1
  },
]);

// Q.3 Show all products bought by each customer

db.orders.aggregate([
  {
    $unwind: "$products",
  },
  {
    $group: {
      _id: "$customer",
      product: {
        $push: "$products.name",
      },
    },
  },
]);

// Q.4 Find customers who spent more than 50,000
db.orders.aggregate([
  {
    $unwind: "$products",
  },
  {
    $group: {
      _id: "$customer",
      totalSpend: {
        $sum: {
          $multiply: ["$products.price", "$products.quantity"],
        },
      },
    },
  },
  {
    $sort: {
      totalSpend: -1,
    },
  },

  {
    $match: {
      totalSpend: { $gt: 50000 },
    },
  },
]);

// Q.5 Find most sold product
db.orders.aggregate([
  {
    $unwind: "$products",
  },
  {
    $group: {
      _id: "$products.name",
      mostSold: {
        $sum: "$products.quantity",
      },
    },
  },
  {
    $sort: {
      mostSold: -1,
    },
  },
]);

// Q.6 Create pagination using aggregation
let page = 1;
let pageLimit = 5;

db.orders
  .find({}, { customer: 1, id: 1, _id: 0 })
  .skip(pageLimit * (page - 1))
  .limit(pageLimit)
  .sort({ id: 1 });

db.orders.find().limit(5).skip(2);

// let page = 1;
// let pageLimit = 5;
db.orders.aggregate([
  {
    $project: {
      customer: 1,
      id: 1,
      _id: 0,
    },
  },
  {
    $skip: pageLimit * (page - 1),
  },
  {
    $limit: pageLimit
  },

  {
    $sort: {
      id: 1
    }
  }
]);

// // Q.7 Find average order value per city



// /* Q.8 Create analytics dashboard data.
//         For each category:
//             total products sold
//             total revenue
//             average price
// */

db.orders.aggregate([
    {
        $unwind : "$products",
    
    },
    {
        $group : {
            _id : '$products.category',
            totalSoldProducts  : {
                $sum : "$products.quantity"
            },
            totalRevenue : {
                $sum : {
                    $multiply : [
                        '$products.price', '$products.quantity'
                    ]
                }
            },
            AvgPrice : {
                $avg : {
                    $multiply : [
                        '$products.price', '$products.quantity'
                    ]
                }
            } 
        }
    }
])

// // Q.9 Join users and orders using $lookup
db.users.aggregate([
    {
        $lookup: {
          from: 'orders2',
          localField: '_id',
          foreignField: "customerId",
          as: 'Orders'
        }
    }
])
// // Q.10 Find users having no orders
db.users.aggregate([
    {
         $lookup: {
          from: 'orders2',
          localField: '_id',
          foreignField: "customerId",
          as: 'Orders'
        }
    },
    {
        $match : {
            Orders : []
        }
    }
])

