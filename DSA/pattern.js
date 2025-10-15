// * * * *
// * * * *
// * * * *
// * * * *

// let n = 4;
// for (let i = 0; i < n; i++) {
//   let bag = "";
//   for (let j = 0; j < n; j++) {
//     bag += " *";
//   }

//   console.log(bag);
// }

// -------------------------------------

// *
// * *
// * * *
// * * * *

// let n = 4;
// for (let i = 0; i < n; i++) {
//   let bag = "";
//   for (let j = 0; j <= i; j++) {
//     bag += " *";
//   }
//   console.log(bag);
// }

// -------------------------------------

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let n = 5;

for (let i = 1; i <= n; i++) {
  let bag = "";
  for (let j = 1; j <= i; j++) {
    bag += ` ${j}`;
  }
  console.log(bag);
}
