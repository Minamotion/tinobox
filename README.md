# TinoboxDB
A short way for writing local IDBDatabase code
## What does it make me do better?
Instead of writing long spaguetti code
```javascript
// OH NO!!! HARD CODE!!! D:
const request = indexedDB.open("my-awesome-database");
request.onerror = (event) => {
    console.error("Oh noes! Something went wrong!\nDetails:", event.target.error)
};
request.onsuccess = (event) => {
    const db = event.target.result;
    db.onerror = (event) => {
        console.error("Oh noes! Something went wrong!\nDetails:", event.target.error)
    }
};
request.onupgradeneeded = (event) => {
	const db = event.target.result
    const data = db.createObjectStore("data", { keyPath: "dataname" })
    data.createIndex("datacontent", "datacontent", { unique: false })
}

request.result.transaction("data", "readwrite").objectStore("data").put({dataname: "foo", datacontent: {isFoo: true}})
request.result.transaction("data", "readwrite").objectStore("data").put({dataname: "bar", datacontent: {isFoo: false}})
```
You can write this
```javascript
// YAY!!! EASY CODE!!! :D
const myAwesomeDatabase = TinoboxDB("my-awesome-database")
myAwesomeDatabase.write("foo", {isFoo: true})
myAwesomeDatabase.write("bar", {isFoo: false})
```
## How do I include it in my javascript code?
Simple, just copy paste this into the top of your js file
```javascript
import TinoboxDB from "https://cdn.jsdelivr.net/gh/Minamotion/tinobox/tbdb.js"
```
And now you can create as many databases as you want
```javascript
// This is just an example
import TinoboxDB from "https://cdn.jsdelivr.net/gh/Minamotion/tinobox/tbdb.js";

const a = new TinoboxDB("a")
a.write("foo", {isFoo: true})

const b = new TinoboxDB("b")
a.write("foo", "foo")

console.log("a.foo = ",a.read("foo"),"\nb.foo = ",b.read("foo"))
```
## Why is it just one file (excluding the README.md)
You don't need that much crap to make something work, do you?