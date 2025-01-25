class TinoBoxDB {
    /**
     * Tinobox database
     * @type {IDBDatabase}
     */
    db
    constructor() {
        const request = window.indexedDB.open("tinobox_db", 3);
        request.onerror = (_) => {
            open(`https://tinobox.minamotion.name/tinobox_db_error.html/?errname=${request.error.name}&errmsg=${request.error.message}`)
        }
        request.onsuccess = (_) => {
            this.db = request.result
            this.db.onerror = (event) => {
                open(`https://tinobox.minamotion.name/tinobox_db_error.html/?errname=${event.target.error.name}&errmsg=${event.target.error.message}`)
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
     * @returns {IDBRequest} Request
     */
    writeData(name, content) {
        return this.db.transaction("data", "readwrite").objectStore("data").put({dataname: name, datacontent: content})
    }
    /**
     * Requests the database to delete an item
     * @param {string} name Name of item (item must exist)
     * @returns {IDBRequest} Request
     */
    deleteData(name) {
        return this.db.transaction("data", "readwrite").objectStore("data").delete(name)
    }
    /**
     * Requests the database to read an item
     * @param {string} name Name of item (item must exist)
     * @returns {IDBRequest} Request
     */
    readData(name) {
        return this.db.transaction("data").objectStore("data").get(name)
    }
}
class TinoBox {
	database
	constructor() {
		console.log("TinoBox has been instantiated")
	}
	wave(x = Math.PI) {
		return (Math.cos(x) + 1) / 2
	}
	randomInt(min = 0, max = 10) {
		return Math.floor(Math.random() * max) + min
	}
}

const tinobox = new TinoBox()
export { tinobox }
