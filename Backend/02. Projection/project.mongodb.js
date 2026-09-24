show("dbs")

use("shopApp");

show('collections')

db.users.find({});


//syntax 
// db.<collection_name>.find({query}, {aggregation})

//field that i want to show
db.users.find({}, {email : 1, _id : 0});
db.users.find({}, {name : 1, email : 1, _id : 0});

// field that i dont want to show

db.users.find({}, {age : 0})
