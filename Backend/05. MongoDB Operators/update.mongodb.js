use('mydb')

db.products.updateMany(
  {},
  { $set: { price: 0 } }
)

db.products.updateMany(
  {},
  { $unset: { images: 0 } }
)

db.products.updateMany(
  {},
  { $unset: { thumbnail: 0 } }
)

db.products.updateMany(
  {},
  { $inc: { stock: 5 } }
)

db.products.updateMany(
  {},
  { $inc: { stock: -5 } }
)

db.products.updateMany(
  {},
  {$mul : {stock : 2}}
)

db.products.updateMany(
  {},
  {$rename : {weight : 'weightInKG'} }
)


//  Array operators
db.products.updateMany(
  {},
  {$push : {tags : "New_Product"}}
)

db.products.updateMany(
  {},
  {$pull : {tags : "New_Product"}}
)

db.products.updateMany(
  {},
  {$addToSet : {tags : "New_Product"}}
)



