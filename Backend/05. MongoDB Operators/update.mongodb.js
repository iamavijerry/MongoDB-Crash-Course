use('mydb')

db.products.updateMany(
  {},
  {$set : {price : 0}}
)

db.products.updateMany(
  {},
  {$unset : {images : 0}}
)

db.products.updateMany(
  {},
  {$unset : {thumbnail : 0}}
)

db.products.updateMany(
  {},
  {$set : {stock : {$inc : 5}}}
)