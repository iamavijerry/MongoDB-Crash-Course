show("dbs")

use("shopApp");

show('collections')

db.users.find({});

db.users.find({}, {email : 1, _id : 0})
db.users.find({}, {name : 1, email : 1, _id : 0})