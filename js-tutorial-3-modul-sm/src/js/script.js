"use strict";

const { timers } = require("jquery");

/* ==== 51 - lesson 📚 "JSON Chuqur clonlash" 📚 ==== */

// const car = {
//   name: "bmw",
//   color: "black",
//   extra: {
//     tire: 20,
//     isAirbag: true,
//   },
// };

// // Deep Cloning 🚩
// // 1)
// const clone = JSON.parse(JSON.stringify(car));

// clone.extra.tire = 22;

// console.log(car);
// console.log(clone);

// // 2)
// // JSON.stringify() 🚩 = objectdan JSON formatga o'girib beradi
// const objToJSON = JSON.stringify(car);
// // JSON.parse() 🚩 = JSON formatdan objectga o'girib beradi
// const jsonToObj = JSON.parse(objToJSON);

// console.log(objToJSON);
// console.log(jsonToObj);

/* ==== 52- lesson 📚 "AJAX" 📚 ==== */

// const uzs = document.querySelector("#uzs"),
//   usd = document.querySelector("#usd");

// uzs.addEventListener("input", (e) => {
//   const request = new XMLHttpRequest();

//   request.open("GET", "json/current.json");
//   request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
//   request.send();

//   request.addEventListener("load", () => {
//     if (request.status === 200) {
//       const data = JSON.parse(request.response);
//       usd.value = (+uzs.value / data.current.usd).toFixed(2);
//     } else {
//       usd.value = "Something went wrong";
//     }
//   });

//   // status 200 - ok, 404 - not found, 500 - server error, 400 - client error 🚩
//   // status Text 🚩
//   // response 🚩
//   // readyState 🚩
// });

/* ==== 53- lesson 📚 "Loyiha, Malumot yuborish" 📚 ==== */
/* ==== 54- lesson 📚 "Loyiha, Dynamic styling" 📚 ==== */
/* ==== 55- lesson 📚 "Promise" 📚 ==== */

// 1)
// const isFriendCome = false;

// const meetingRequest = new Promise((resolve, reject) => {
//   if (isFriendCome) {
//     const msg = "Friend I'm there";
//     resolve(msg);
//   } else {
//     const err = "I cannot go there";
//     reject(err);
//   }
// });

// meetingRequest
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Keep me posted"));

// 2)

// console.log("Requesting Data...");

// const req = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const product = {
//       name: "car",
//       color: "black",
//     };
//     console.log("Proccessing data...");
//     resolve(product);
//   }, 2000);
// });

// req
//   .then((data) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         data.status = "ordered";
//         console.log("Get data...");
//         resolve(data);
//       }, 2000);
//     });
//   })
//   .then((result) => console.log(result))
//   .finally(() => console.log("Fetching end"));

/* ==== 56- lesson 📚 "Promise Method" 📚 ==== */

// const request = (time) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, time);
//   });
// };

// // 1)
// request(1000).then(() => console.log('Request 1000ms'))
// request(2000).then(() => console.log('Request 2000ms'))
// request(3000).then(() => console.log('Request 3000ms'))

// // 2)
// // Promise.all([]) 🚩
// Promise.all([request(1000), request(2000), request(3000)]).then(() => {
//   console.log("All");
// });

// // 3)
// // Promise.race([]) 🚩
// Promise.race([request(1000), request(2000), request(3000)]).then(() => {
//   console.log("All");
// });

/* ==== 57- lesson 📚 "Fetch API" 📚 ==== */

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headres: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ name: "yusuf", age: 16 }),
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

/* ==== 58- lesson 📚 "Map, Filter, Reduce" 📚 ==== */

// MAP method 🚩 - yangi massive qaytaradi eski massiveni qiymatini o'zgartirib

// const car = ["MErc", "BmW", "RolCE RoyCe"];

// const arr = car.map((item) => {
//   return item.toUpperCase();
// });

// console.log(arr);

// FILTER method 🚩 - yangi massive qaytaradi filter qilib

// let car = ["mercedenz-benz", "bmw", "audi", "rolce-roys"];
// car = car.filter((item) => item.length < 5);
// console.log(car);

// SOME/EVERY method 🚩 -  boolean qiymat qaytaradi
// SOME - bitta to'ri bosayam True
// EVERY - bitta xato bo'sayam False

// const car = [1, "samar", true];
// console.log(car.some((item) => typeof item === "number"));

// REDUCE method 🚩 - bitta qandaydir qiymat qaytaradi

// 1)
// const arr = [4, 32, 1, 3];
// const response = arr.reduce((sum, current) => {
//   return sum + current;
// });

// console.log(response);

// 2)
// const arr = ["bmw", "merc", "rollce roys"];
// const res = arr.reduce((sum, current) => {
//   return `${sum} ${current}`;
// });
// console.log(res);

/* ==== 59- lesson 📚 "NPM" 📚 ==== */
/* ==== 67- lesson 📚 "Localstorage" 📚 ==== */

// const email = document.querySelector(".email"),
//   firstName = document.querySelector(".name"),
//   formSubmit = document.querySelector("form"),
//   remove = document.querySelector(".remove");

// 1)
// // SET ITEM 🚩

// localStorage.setItem("name", "yusuf");

// // GET ITEM 🚩

// const name = localStorage.getItem("name");
// console.log(name);

// // REMOVE & CLEAR 🚩
// // clear - remove all items at the same time

// remove.addEventListener("click", () => {
//   localStorage.removeItem("name");
// });

// 2)

// formSubmit.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const user = {
//     email: email.value,
//     name: firstName.value,
//   };
//   e.target.reset;

//   localStorage.setItem("user", JSON.stringify(user));
// });
// const user = JSON.parse(localStorage.getItem("user"));
// localStorage.clear();

/* ==== 68- lesson 📚 "Regular Expression" 📚 ==== */

// new RegExp('pattern', 'flags') - old way

// /pattern/flag - new way

//1)
// const firstName = prompt("What is your name?");
// const regex = /y/gi;

// // two flags in RegExp
// // i - upper and lower case 🚩
// // g - global 🚩

// // search() 🚩
// console.log(firstName.search(regex));
// // match() 🚩
// console.log(firstName.match(regex));

// 2)

// const password = prompt("Your password");

// // replace() 🚩
// console.log(password.replace(/./g, "*"));
// console.log(password.replace(/\$/g, "*"));

// // 3)

// const num = "12-34-56-78-90";

// console.log(num.replace(/-/g, ";"));

// 4)

// const name = prompt("Name", "");

// const regex = /\d/g;

// // \d - search number 🚩
// // \w - search word 🚩
// // \s - search space 🚩

// // \D - search not number 🚩
// // \W - search not word 🚩
// // \S - search not space 🚩

// // test() 🚩
// console.log(regex.test(name));

// console.log(name.match(regex));

/* ==== 69- lesson 📚 "Loyiha, regex" 📚 ==== */
/* ==== 70- lesson 📚 "Getters & Setters" 📚 ==== */

// const car = {
//   name: "bmw",
//   color: "black",

//   get carName() {
//     return this.name;
//   },

//   set carName(name) {
//     this.name = name;
//   },
// };

// // console.log(car.name);
// // console.log(car.color);
// console.log(car.carName);
// console.log((car.carName = "merc"));

/* ==== 71- lesson 📚 "Inkapsulatsiya constructor" 📚 ==== */

// function Car(name, color, bonus) {
//   this.name = name;
//   this.color = color;
//   let extraBonus = bonus;

//   this.info = function () {
//     console.log(
//       `Name of car ${this.name}, color is ${this.color}. There is ${bonus} bonus`
//     );
//   };

//   this.getBonus = function () {
//     return extraBonus;
//   };

//   this.setBonus = function (bonus) {
//     if (typeof bonus === "number" && bonus > 0 && bonus < 100) {
//       extraBonus = bonus;
//     } else {
//       console.log("Something went wrong");
//     }
//   };
// }

// const bmw = new Car("bmw", "black", 10);
// console.log(bmw.getBonus());
// console.log(bmw.setBonus(20));

// bmw.info();

/* ==== 72- lesson 📚 "Inkapsulatsiya class" 📚 ==== */

// class Car {
//   constructor(name, color, bonus) {
//     this.name = name;
//     this.color = color;
//     this._extraBonus = bonus;
//   }

//   info() {
//     console.log(
//       `Name of car ${this.name}, color is ${this.color}. There is ${this._extraBonus} bonus`
//     );
//   }

//   get bonus() {
//     return this._extraBonus;
//   }

//   set bonus(bonus) {
//     if (typeof bonus === "number" && bonus > 0 && bonus < 100) {
//       this._extraBonus = bonus;
//     } else {
//       console.log("Something went wrong");
//     }
//   }
// }

// bmw = new Car("bmw", "black", 10);
// console.log(bmw.bonus);
// console.log((bmw.bonus = 90));
// bmw.info();

/* ==== 73- lesson 📚 "Webpack" 📚 ==== */

// const module = require("./main");

// const myModule = new module();
// myModule.sayHello();
// myModule.sayBye();

/* ==== 75- lesson 📚 "Module ES6" 📚 ==== */

// korsatilagan papkadagi barcha exportlarni bitta ozgaruvchiga oladi 🚩
// import * as main from ".main";

// // 1)
// import { firstVar } from "./main";

// console.log(firstVar);
// // 2)
// console.log(secondVar);
// // 3)
// import logger from "./main";

// logger();

/* ==== 76- lesson 📚 "Try Catch" 📚 ==== */

try {
  console.log("work");
  console.log(a);
  console.log("Proccessing");
} catch (error) {
  console.log("error");
}

console.log("done");
