function getMaxValue(carrotTypes, capacity) {
  const capacities = Array(capacity + 1).fill(0);
  for (let i = 0; i <= capacity; i++) {
    for (const carrot of carrotTypes) {
      if (i >= carrot.kg) {
        capacities[i] = Math.max(
          capacities[i],
          capacities[i - carrot.kg] + carrot.price
        );
      }
    }
  }
  return capacities[capacity];
}

const carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 },
];
const capacity = 37;

console.log(getMaxValue(carrotTypes, capacity));
