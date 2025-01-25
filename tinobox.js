class TinoBox {
  constructor() {
    console.log("TinoBox has been instantiated")
  }
  class TinoBoxDB {
    constructor() {
      let req = indexedDB.open("TINOBOX_DB//"+location.hostname.toUpperCase(), 1)
      req.onerror = (_) => {
        open(`https://tinobox.minamotion.name/TINOBOX_DB_ERROR/?errname=${req.error.name}&errmsg=${req.error.message}`)
      }
      req.onsuccess = (_) => {
        console.log("Opened tinobox database successfully")
        this.db = req.result
      }
    }
    create(name, options) {
      return this.db.createObjectStore(name, options)
    }
  }
  wave(x= Math.PI) {
    return (Math.cos(x) +1) /2
  }
  randomInt(min= 0, max= 10) {
    return Math.floor(Math.random() *max) +min
  }
}

const tinobox = new TinoBox()
export {tinobox}
