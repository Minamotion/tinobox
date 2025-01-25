class CoolMath {
  wave(x= Math.PI) {
    return (Math.cos(x) +1) /2
  }
  randomInt(min= 0, max= 10) {
    return Math.floor(Math.random() *max) +min
  }
}
const coolmath= new CoolMath()
console.log("TinoBox was imported in a script!")
export {coolmath}
