export default (size, step, begin) => {
  const progression = [];
  let elem = begin;

  for (let i = 0; i < size; i += 1) {
    progression.push(elem);

    elem += step;
  }

  return progression;
};
