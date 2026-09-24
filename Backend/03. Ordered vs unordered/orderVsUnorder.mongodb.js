use('shopApp');

db.users.insertMany([
  { _id: 1, name: "Jerry" }, //uploaded ✅
  { _id: 2, name: "Muskan" }, //uploaded ✅
  { _id: 1, name: "Rahul" }, // This is orderd insert, data will not uploaded of duplicate ID and afer users ID
  { _id: 3, name: 'Ankita' }, // failed ❌
  { _id: 4, name: 'Radhika' }, // failed ❌
]);

db.users.insertMany([
  { _id: 3, name: 'Ankita' },
  { _id: 4, name: 'Radhika' },
  { _id: 1, name: "Rahul" },
])

db.users.insertMany([
  { _id: 11, name: "Jerry" }, //uploaded ✅
  { _id: 22, name: "Muskan" }, //uploaded ✅
  { _id: 11, name: "Rahul" }, // failed ❌ This is un-orderd insert, data will not uloaded only of duplicate ID, but after that duplicate id, data will be uploded in un-ordered insert
  { _id: 33, name: 'Ankita' }, //uploaded ✅
  { _id: 44, name: 'Radhika' }, //uploaded ✅
],
  { ordered: false }
);

// ordered vs un-ordered


