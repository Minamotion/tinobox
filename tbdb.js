/**
 * TinoboxDB
 */
export default class TinoboxDB {
    /**
     * Actual IDBDatabase
     * @type {IDBDatabase}
     */
    db
    /**
     * Creates a database you can write to
     * @param {string} name Name of the database, it must be unique
     */
    constructor(name) {
        const request = window.indexedDB.open(`TBDB:${name}`, 1);
        request.onerror = (_) => {
		    console.error("Oh noes! Something went wrong!\nDetails:", request.error)
        }
        request.onsuccess = (_) => {
            this.db = request.result
            this.db.onerror = (event) => {
                console.error("Oh noes! Something went wrong!\nDetails:", event.target.error)
            }
        }
        request.onupgradeneeded = (_) => {
            const data = this.db.createObjectStore("data", { keyPath: "dataname" })
            data.createIndex("datacontent", "datacontent", {unique: false})
        }
    }
    /**
     * Requests the database to create/modify an item
     * @param {string} name Name of item
     * @param {*} content Contents of item
     * @returns {IDBRequest<IDBValidKey} Request
     */
    write(name, content) {
        return this.db.transaction("data", "readwrite").objectStore("data").put({dataname: name, datacontent: content})
    }
    /**
     * Requests the database to delete an item
     * @param {string} name Name of item (item must exist)
     * @returns {IDBRequest<undefined>} Request
     */
    delete(name) {
        return this.db.transaction("data", "readwrite").objectStore("data").delete(name)
    }
    /**
     * Requests the database to read an item
     * @param {string} name Name of item (item must exist)
     * @returns {IDBRequest<any>} Request
     */
    read(name) {
        return this.db.transaction("data").objectStore("data").get(name)
    }
}