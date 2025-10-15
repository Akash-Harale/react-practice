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

let n = 4;
for (let i = 0; i < n; i++) {
  let bag = "";
  for (let j = 0; j <= i; j++) {
    bag += " *";
  }
  console.log(bag);
}
