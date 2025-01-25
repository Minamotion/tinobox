let db;
let req = indexedDB.open("TINOBOX_DB//"+location.hostname.toUpperCase(), 1)
req.onerror = (_) => {
    open("https://tinobox.minamotion.name/TINOBOX_DB_ERROR/?error=-1")
}
req.onsuccess = (_) => {
    console.log("Opened local database successfully")
    db = req.result
}