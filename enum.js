"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 3] = "Red";
    Color2[Color2["Green"] = 4] = "Green";
    Color2[Color2["Blue"] = 5] = "Blue";
})(Color2 || (Color2 = {}));
let c2 = Color.Green;
console.log(c2);
console.log("hello world");
