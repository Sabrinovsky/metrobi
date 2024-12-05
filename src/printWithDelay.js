function printWithDelay(array) {
  array.forEach(async (element, index) => {
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log(element);
        resolve();
      }, Math.pow(2, index) * 1000)
    );
  });
}

printWithDelay([1, 2, 3, 4]);
