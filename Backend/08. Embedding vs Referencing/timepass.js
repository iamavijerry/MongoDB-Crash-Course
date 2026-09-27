

db.students.updateMany(
  {
    _id: {
      $in: [
        ObjectId("6ab565d8095ecc731dabc130"),
        ObjectId("6ab565d8095ecc731dabc12f"),
        ObjectId("6ab565d8095ecc731dabc12e"),
      ],
    },
  },
  {
    $pull: {
      course: {
        $type : "array"
      },
    },
  },
);

db.students.updateMany(
  {
    
  },
  {
    $pull: {
      course: {
        $type : "array"
      },
    },
  },
);

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