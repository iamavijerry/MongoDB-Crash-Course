# Export collection to JSON

Syntax
mongoexport --db=<database_name> --collection=<collection_name> --out=<file.json>

Example
mongoexport --db=college --collection=students --out=students.json


The file might contain:
{"_id":1,"name":"Rahul","age":21,"course":"BCA"}
{"_id":2,"name":"Priya","age":22,"course":"BCA"}




# Export to CSV
If you want CSV instead of JSON:

Syntax
mongoexport --db=<database> --collection=<collection> --type=csv --fields=<field1,field2,...> --out=<file.csv>

Example
mongoexport --db=college --collection=students --type=csv --fields=name,age,course --out=students.csv




# Export JSON
mongoexport --db=college --collection=students --out=students.json

# Export CSV
mongoexport --db=college --collection=students \
  --type=csv --fields=name,age,course --out=students.csv

# Import JSON
mongoimport --db=college --collection=students --file=students.json

# Import JSON array
mongoimport --db=college --collection=students \
  --file=students.json --jsonArray

# Import CSV
mongoimport --db=college --collection=students \
  --type=csv --headerline --file=students.csv

# Drop collection and import
mongoimport --db=college --collection=students \
  --file=students.json --drop

# Full database backup
mongodump --db=college --out=backup

# Restore backup
mongorestore --db=college backup/college



## MongoDB Import & Export Commands

# 1. Import JSON

Import a JSON file into a MongoDB collection.

mongoimport --db <db_name> --collection <collection_name> --file <file_name>

Example:

mongoimport --db mydb --collection users --file users.json

---

# 2. Import JSON Array

Use "--jsonArray" when the JSON file contains an array of documents.

mongoimport --db <db_name> --collection <collection_name> --file <file_name> --jsonArray

Example:

mongoimport --db mydb --collection users --file users.json --jsonArray

---

## Export

# 1. Export as JSON

Export documents from a MongoDB collection to a JSON file.

mongoexport --db <db_name> --collection <collection_name> --out <file_name>

Example:

mongoexport --db mydb --collection users --out users.json

---

# 2. Export as JSON Array

Use "--jsonArray" to export the documents as a single JSON array.

mongoexport --db <db_name> --collection <collection_name> --out <file_name> --jsonArray

Example:

mongoexport --db mydb --collection users --out users.json --jsonArray

---

# Quick Reference

Operation| Command
Import JSON| "mongoimport --db <db_name> --collection <collection_name> --file <file_name>"
Import JSON Array| "mongoimport --db <db_name> --collection <collection_name> --file <file_name> --jsonArray"
Export JSON| "mongoexport --db <db_name> --collection <collection_name> --out <file_name>"
Export JSON Array| "mongoexport --db <db_name> --collection <collection_name> --out <file_name> --jsonArray"