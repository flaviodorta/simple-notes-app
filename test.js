const uniqueId = (array, length = 1) => {
  const id = Math.floor(Math.random() * length);
  const hasId = array.map((idx) => idx === id);
  console.log(hasId, ' ', id);
  if (hasId.includes(true)) return uniqueId(array, length);
  else return [id];
};

console.log(uniqueId([1, 2, 3, 4], 9));
