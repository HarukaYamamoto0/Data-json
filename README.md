# Appo-database
a simple database just to be clear, this project is just a challenge i made for myself, first i will build the database using key and value architecture, then i will increase the difficulty.

I'm going to use the simpl.db package, created by [5antos](https://github.com/5antos), as a base, so as I said I'm going to increase the difficulty, my goal, and get as close as possible to the mongoose package.

I don't intend to gain anything from it, as I said, it's just a challenge.

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
