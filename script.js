// პირველი და მეხუთე დავალება
let numbers = {
    a: 4,
    b: 2,
    c: 7,
    d: 6,
    e: 5,
}
for (let i = 0; i < 10; i++) {
    numbers = numbers + i;
  }
  
console.log(numbers)
console.log(numbers.a + numbers.b + numbers.c + numbers.d + numbers.e)
// მეორე დავალება
let person = {
    firstName: "Giorgi",
    age: 16,
    address: "Georgia, T'bilisi"
}
// მესამე დავალება
console.log(`My name is ${person.firstName}, My age is ${person.age}, My address is ${person.address} `)
// მეოთხე დავალება
if (person.age < 18) {
    console.log(`I am a teenager`)
}
else{
    console.log(`I am an adult`)
}
// დამატებითი დავალება
const currentDay = new Date().getDay(); currentDay
let day; 
switch (new Date().getDay()) {
    case 0:
      day = "კვირა";
      break;
    case 1:
      day = "ორშაბათი";
      break;
    case 2:
       day = "სამშაბათი";
      break;
    case 3:
      day = "ოთხშაბათი";
      break;
    case 4:
      day = "ხუთშაბათი";
      break;
    case 5:
      day = "პარასკევი";
      break;
    case 6:
        day = "შაბათი";
        break;
  }
console.log(day)
if (currentDay === 0) {
    console.log("კვირა")
}
if (currentDay === 1) {
    console.log("ორშაბათი")
}
if (currentDay === 2) {
    console.log("სამშაბათი")
}
if (currentDay === 3) {
    console.log("ოთხშაბათი")
}
if (currentDay === 4) {
    console.log("ხუთშაბათი")
}
if (currentDay === 5) {
    console.log("პარასკევი")
}
if (currentDay === 6) {
    console.log("შაბათი")
}
