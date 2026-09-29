use('mydb')



// totally wrong approach 
db.students.updateMany(
  {},
  {
    $set: {
      course: [
        {
          _id: 101,
          name: "BCA",
          duration: 12
        },
        {
          _id: 102,
          name: "Digital Marketing",
          duration: 6
        }
      ]
    }
  }
)


db.students.updateMany(
  {
    isStudent: true,
    "course._id": 102
  },
  {
    $set: {
      "course.$.price": 12000
    }
  }
)

db.students.updateMany(
  {},
  { $set: { isStudent: true } }
)


db.students.updateMany(
  {
    name: "Amit",
  },
  {
    $pull: {
      course: { _id: 102 }
    }
  }
)

//  Not a good way (Embedded Document)
// {
//   _id: ObjectId('6ab55d29095ecc731dabc125'),
//     name: 'Karan',
//       course: [
//         { _id: 101, name: 'BCA', duration: 12, price: 36000 },
//         { _id: 102, name: 'Digital Marketing', duration: 6, price: 12000 }
//       ],
//         isStudent: true
// },

// {
//   _id: ObjectId('6ab55d29095ecc731dabc126'),
//     name: 'Pooja',
//       course: [
//         { _id: 101, name: 'BCA', duration: 12, price: 36000 },
//         { _id: 102, name: 'Digital Marketing', duration: 6, price: 12000 }
//       ],
//         isStudent: true
// },


// created new collection
db.courses.insertMany([
  { name: 'BCA', duration: 12, price: 36000 },
  { name: 'Digital Marketing', duration: 6, price: 12000 }
])




// pulll by objectId
// use $in if u want to update in many documents.
db.students.updateMany(
  {
    _id: {
      $in: [
        ObjectId('6ab565d8095ecc731dabc130'), ObjectId('6ab565d8095ecc731dabc12f'), ObjectId('6ab565d8095ecc731dabc12e')
      ]
    }
  },
  {
    $pull: {
      course: {
        _id: ObjectId('6ab7e11a095ecc731dabc134')
      }
    }
  }
)


// push multiple object in an Array
db.students.updateMany(
  {}, 
  {$push : {
    course : { 
      $each : [
        {courseId :  ObjectId('6ab7e11a095ecc731dabc133')},
        {courseId :  ObjectId('6ab7e11a095ecc731dabc134')},
      ]
    }
  }}
)

// find ref link
db.students.aggregate([
  {
    $lookup : {
      from : "courses",
      localField : "course.courseId",
      foreignField : "_id",
      as : "coursesDetails"
    }
  }
])


//wrong syntax
db.students.updateMany(
  {name : 'Ravi', name : 'Anita', name : 'Karan', name : 'Pooja'},
  {
    $pop : {
      course : 1
    }
  }
)


//pop last object on array
//   1 for last, -1 for first
db.students.updateMany(
  {
    name: {
      $in: ['Ravi', 'Anita', 'Karan', 'Pooja']
    }
  },
  {
    $pop: {
      course: 1
    }
  }
)