// use("ecommerce")
use("ecommerce")

// db.products.find( {category : "Electronics"})

// db.products.find(
//   {
//     price : { $lt : 1000}
//   }
// )

db.products.find(
  {
    price: { $gte: 1000, $lte: 2500 }
  }
)

