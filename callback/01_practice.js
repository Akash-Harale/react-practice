const findSquare = (fn) => {
  const numbers = [12, 8, 5, 6, 9];
  console.log(fn(numbers));
};

const callback = (arr = []) => {
  return arr.map((el) => el * el);
};

findSquare(callback);
