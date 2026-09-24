use('mydb')


// db.users3.insertMany(
//   [
//     {name : "Jerry" , age :44444},
//     {name : "Manav"},
//     {age :44444},
//     {name : "ppppp" , age :'44444'},
//     {name : "Jerry" , age :99},
//   ]
// )


// db.users3.find(
//   {age : {$exists : true}}
// )

// db.users3.find(
//   {name : {$exists : true}}
// )

// db.users3.find(
//   {age : {$type : 'number'}}
// )

db.users3.find(
  {age : {$type : 'string'}}
);
