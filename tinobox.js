class LocalSave{
  constructor(path="") {
    this.path = window.location.hostname+path
  }
  set(path,data) {
    localStorage.setItem(this.path+path,data)
  }
  get(path,data=null) {
    if ( localStorage.getItem(this.path +path) !=null ) {
      return localStorage.getItem(this.path +path)
    } else {
      return data
    }
  }
}
class CoolMath{
  wave(x= Math.PI) { return (Math.cos(x) +1) /2 }
  randomInt(min= 0, max= 10){
    return Math.floor(Math.random() *max) +min
  }
}
const coolmath= new CoolMath()
console.log("TinoBox was imported in a script!")
export {coolmath, LocalSave}
