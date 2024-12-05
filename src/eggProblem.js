const INITIAL_DROP_FLOOR = 14;
const MAX_FLOOR = 100;

function findSafeFloor(lastSafeFloor) {
  let interval = INITIAL_DROP_FLOOR;
  let currentFloor = interval;
  let attempts = 0;
  let firstEggBroke = false;
  let firstEggBrokeFloor;

  while (currentFloor <= MAX_FLOOR) {
    attempts++;

    if (firstEggBroke) {
      if (currentFloor > lastSafeFloor) {
        console.log("second egg broke on floor", currentFloor);
        console.log("safe floor is", currentFloor - 1);
        break;
      } else if (currentFloor + 1 === firstEggBrokeFloor) {
        console.log("second egg would break on next floor", currentFloor + 1);
        console.log("safe floor is", currentFloor);
        break;
      }
    } else {
      if (currentFloor > lastSafeFloor) {
        console.log("first egg broke on floor", currentFloor);
        firstEggBrokeFloor = currentFloor;
        firstEggBroke = true;
        currentFloor =
          attempts === 1 ? 1 : (attempts - 1) * INITIAL_DROP_FLOOR + 1;
        interval = 1;
        continue;
      }
    }
    if (currentFloor + interval > MAX_FLOOR) {
      interval = 1;
    }
    if (interval > 1) {
      interval--;
    }
    currentFloor += interval;
  }

  return { attempts };
}

console.log(findSafeFloor(14));
