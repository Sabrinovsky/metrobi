function getMaxValue(carrotTypes, capacity) {
  carrotTypes.sort((a, b) => b.price / b.kg - a.price / a.kg);

  const price = carrotTypes[0].price / carrotTypes[0].kg;

  return price * capacity;
}

const carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 },
];
const capacity = 36;

console.log(getMaxValue(carrotTypes, capacity));
