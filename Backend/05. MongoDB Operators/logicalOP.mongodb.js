use('mydb')

db.products.find(
  // {$and : [{category : "beauty"}, {price : {$lt : 12.99}}]},

  { category: 'beauty', price: { $lt: 12.99 } }, //it works but, dont use this 
  { title: 1, category: 1, price: 1, _id: 0 }
);

db.products.find(
  {
    $or: [{ category: "beauty" },
    { price: { $not: { $lt: 12.99 } } }]
  },

  // {category : 'beauty', price : {$lt : 12.99}}, //it works but, dont use this 
  { title: 1, category: 1, price: 1, _id: 0 }
);



db.products.find(
  { $nor: [{ category: 'beauty' }, { price: { $gt: 20.00 } }] },

  { title: 1, category: 1, price: 1, _id: 0 }
)



