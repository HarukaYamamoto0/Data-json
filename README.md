# Appo-database.
Just a simple key and value style database.

appo-datatabse is a challenge I made for myself, but I'm temporarily giving up as I still don't have enough knowledge to continue with it as I wanted to expand it to now similar to Mongoose.

I was inspired after seeing the package created by [5antos](https://github.com/5antos) the [Simpl.db](https://www.npmjs.com/package/simpl.db), a lightweight local database.

---

Example of use:
```js
const { Database } = require("appo-database");
const database = new Database();

database.set("userId:0190109101", "userObject"); // undefined
database.has("userId:0190109101"); // true
database.has("foo"); // false
database.get("userId:0190109101"); // "userObject"
database.get("foo"); // null
database.show(); // undefined
database.clear(); // undefined

```
