"use strict";

/* ==== 32 - lesson 📚 "Classlist" 📚 ==== */

// const btns = document.querySelectorAll("button");

// console.log(btns[0].classList.length);

// // classList.item(num) 🚩
// console.log(btns[0].classList.item(1));

// // classList.add('className') 🚩
// btns[1].classList.add("blue");

// // classList.remove('className') 🚩
// btns[0].classList.remove("blue");

// // class.List.toggle('className') 🚩
// btns[3].classList.toggle("blue");

// // classList.contains('className') 🚩
// if (btns[0].classList.contains("blue")) {
//   console.log("yeap");
// }

// btns[0].addEventListener("click", () => {
//  // 1 🚩
//   if (!btns[1].classList.contains("red")) {
//     btns[1].classList.add("red");
//   } else {
//     btns[1].classList.remove("red");
//   }
//   // 2 🚩
//   btns[1].classList.toggle("red");
// });

/* ==== 33 - lesson 📚 "Delegatsiya" 📚 ==== */

// const wrapper = document.querySelector(".btn-block"),
//   btns = document.querySelectorAll("button");

// wrapper.addEventListener("click", (event) => {
//     // 🚩
//   if (event.target && event.target.classList.contains("red")) {
//     console.log("click");
//   }
//   // 🚩
//   if (event.target && event.target.matches("button")) {
//     console.log("click");
//   }
// });

// btns.forEach((item) => {
//   item.addEventListener("clcik", () => {
//     console.log("clicked");
//   });
// });

// const btn = document.createElement("button");
// btn.classList.add("red");
// wrapper.append(btn);

/* ==== 34 - lesson 📚 "Loyiha, Tab" 📚 ==== */
/* ==== 35 - lesson 📚 "Animatsiya. setTimeOut & setInterval" 📚 ==== */

// 1)
// setTimeout(() => {
//   console.log("set time out");
// }, 2000);

// 2)

// setTimeout(logger, 1000);

// function logger() {
//   console.log("set time out");
// }

// // mini project 🚩
// const btn = document.querySelector("#btn");

// function myAnimation() {
//   const car = document.querySelector(".car");
//   let pos = 0;

//   const timerId = setInterval(frame, 1);

//   function frame() {
//     if (pos === 700) {
//       clearInterval(timerId);
//     } else {
//       pos++;
//       car.style.left = pos + "px";
//     }
//   }
// }

// btn.addEventListener("click", myAnimation);

/* ==== 36 - lesson 📚 "Loyiha, Loader" 📚 ==== */
/* ==== 37 - lesson 📚 "Date bilan ishalsh" 📚 ==== */

// const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getTime());
// console.log(now.getUTCHours());
// console.log(now.setHours(18));

// let start = new Date();

// for (let i = 0; i < 1000; i++) {
//   let some = i ** 3;
// }

// let end = new Date();

// alert(`Loop completed in ${end - start} seconds`);

/* ==== 38 - lesson 📚 "Loyiha, Chegara" 📚 ==== */
/* ==== 39 - lesson 📚 "Loyiha, Qo'shimcha" 📚 ==== */
/* ==== 40 - lesson 📚 "Window, Doc bilan ishlash" 📚 ==== */

// const box = document.querySelector(".box"),
//   btn = document.querySelector("button");

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offSetWidth;
// const height = box.offSetHeight;

// console.log(width);
// console.log(height);

// // scrollHeight 🚩
// const height = box.scrollHeight;

// console.log(height);

// btn.addEventListener("click", () => {
//   //   box.style.height = box.scrollHeight + "px";
//   // scrollTop 🚩
//   console.log(box.scrollTop);
// });

// const style = window.getComputedStyle(box);
// console.log(style);

// document.documentElement 🚩
// console.log(document.documentElement.clientWidth);

/* ==== 41 - lesson 📚 "Loyiha, Modal" 📚 ==== */
/* ==== 42 - lesson 📚 "Loyiha" 📚 ==== */
/* ==== 43 - lesson 📚 "Function constructor" 📚 ==== */

/* The name of the variables start always with UpperCase in FUNCTION CONSTRUCTOR 🚩 */

// function Car(name, color, mph) {
//   this.name = name;
//   this.color = color;
//   this.mph = mph;
//   this.isAirbag = true;
//   this.speed = function () {
//     console.log(`Speed of car ${this.name} is ${this.mph}`);
//   };
// }

// Car.prototype.sayHello = function () {
//   console.log(`Car name of ${this.name} say hello`);
// };

// const bmw = new Car("bmw", "black", 320);
// const merc = new Car("merc", "green", 300);

// bmw.sayHello();
// merc.sayHello();

// console.log(bmw);
// console.log(merc);

// bmw.speed();
// merc.speed();

/* ==== 44 - lesson 📚 "Context this & Closure" 📚 ==== */

/* context this - xar doim nimagadir qaram 🚩 */

// 1) Oddiy functionni contexti yani this xar doim global objectga qaram bo'ladi. Agarda qatiy rejim yoqiq bo'lsa (use strict) context undefindga teng bo'ladi

// // Closure 🚩

// const a = 4;

// function log() {
//   const a = 5;
//   console.log(a);
// }

// log();

// 2)
// Context objectni ichidagi methodda objectni o'ziga teng

// const obj = {
//   x: 10,
//   y: 15,
//   sum: function () {
//
//       console.log(this);
//
//   },
// };

// obj.sum();

// 3)
// Context this function constructorda yengi objectni ekzempyariga teng

// function Car(name, color) {
//   this.name = name;
//   this.color = color;
//   this.isAirbag = true;
// }

// const bmw = new Car("BMW", "Black");
// console.log(bmw);

/* ==== 45 - lesson 📚 "Call, Apply & Bind" 📚 ==== */

// 1)
// function logger(speed) {
//   console.log(this);
//   console.log(
//     `My car is ${this.name}, color is ${this.color}. Max speed ${speed}`
//   );
// }

// const car = {
//   name: "BMW",
//   color: "black",
// };

// // call = apply 🚩
// logger.call(car, 350);
// logger.apply(car, [350]);

// 2)
// // bind 🚩

// function calc(number) {
//   return this * number;
// }

// const multiple2 = calc.bind(2);
// console.log(multiple2(10));
// console.log(multiple2(15));

// // 3)
// const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   console.log(this);
//   this.style.width = "400px";
// });

// // 4)
// const obj = {
//   x: 10,
//   y: 15,
//   sum: function () {
//     const logger = () => {
//       console.log(this);
//     };
//     logger();
//   },
// };

// obj.sum();

// sterelkali funksiya xech qanday contextga ega emas, u xar doim o'zini tepasidagi contextga qaram bo'ladi

/* ==== 46 - lesson 📚 "Class ES6" 📚 ==== */

// class Car {
//   constructor(name, color, speed) {
//     this.name = name;
//     this.color = color;
//     this.speed = speed;
//   }

//   calcSpeed() {
//     return this.speed * 100;
//   }
// }

// class Spark extends Car {
//   constructor(name, speed, color, isAirbag, extraTire) {
//     super(name, color, speed);
//     this.isAirbag = isAirbag;
//     this.extraTire = extraTire;
//   }

//   logger() {
//     console.log(
//       `Name of car ${this.name}, color is ${this.color}. Is air bag ${this.isAirbag} and there is ${this.extraTire}`
//     );
//   }
// }

// const aboutCar = new Spark("Spark", "white", true, 18);
// console.log(aboutCar.logger());
// console.log(aboutCar.calcSpeed());

// const bmw = new Car("BMW", "black", 200);
// console.log(bmw);
// console.log(bmw.calcSpeed());

// const merc = new Car("MERC", "green", 100);
// console.log(merc);
// console.log(merc.calcSpeed());

/* ==== 47 - lesson 📚 "Loyiha, Class" 📚 ==== */
/* ==== 48 - lesson 📚 "Rest Operatori" 📚 ==== */

// // 1)
// function logger(a, b, ...rest) {
//   console.log(a, b, rest);
// }

// logger(1, 2, 3, 4, 5, 6, 7);

// // 2)
// function calc(number, def = 10) {
//   console.log(number + def);
// }

// calc(1);


