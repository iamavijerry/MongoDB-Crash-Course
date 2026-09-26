use('test');

let arr = [];

for (let i = 1; i <= 100; i++) {
  arr.push({ value: i })
}

db.data.insertMany(arr)

const cursor = db.data.find()

console.log(cursor)
console.log(cursor.next())
console.log(cursor.hasNext())

while (cursor.hasNext()) {
  console.log(cursor.next())
}

db.data.find().sort({ value: 1 })

db.data.find().sort({ value: -1 })

db.data.find().limit(4)

db.data.find().skip(10)

db.data.find().sort({value : -1}).limit(3)

const page = 5; // 1, 2, 3, 4, 5, 6, 7
const limit = 5 ; 

const data = db.data.find().skip((page -1) * limit).limit(limit)

console.log(data)

