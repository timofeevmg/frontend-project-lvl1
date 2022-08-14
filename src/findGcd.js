export default (a, b) => {
  let x = a;
  let y = b;

  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }

  return x + y;
};
