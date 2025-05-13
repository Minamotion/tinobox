# TinoboxDB
A short way for writing local IDBDatabase code
## What does it make me do better?
Instead of writing long spaguetti code
```javascript
let db;
const request = window.indexedDB.open(`my-awesome-database`, 1);
request.onsuccess = (_) => {db = request.result}
request.onupgradeneeded = (_) => {
    const data = this.db.createObjectStore("data", { keyPath: "dataname" })
    data.createIndex("datacontent", "datacontent", {unique: false})
}
db.transaction("data", "readwrite").objectStore("data").put({dataname: "foo", datacontent: {isFoo: true}})
```
You can write this
```javascript
const tbdb = TinoboxDB("my-awesome-database")
tbdb.write("foo", {isFoo: true})
```
## How do I include it in my javascript code?
Simple, just copy paste this into the top of your js file
```javascript
import { TinoboxDB } from "https://cdn.jsdelivr.com/gh/Minamotion/tinobox/tbdb.js"
```
And now you can create as many databases as you want
```javascript
// This is just a quick example
const a = TinoboxDB("a")
a.write("foo", {isFoo: true})

const b = TinoboxDB("b")
b.write("bar", {isFoo: false})
```
## Why is it just one file (excluding the README.md)
You don't need that much crap to make something work