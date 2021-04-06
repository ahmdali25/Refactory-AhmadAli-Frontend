function sortMethod(array) {
    let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          let tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  
  const numbers = [3, 12, 4, 5, 8, 9];
  console.log(sortMethod(numbers));