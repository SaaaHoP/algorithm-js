const Solution = (InputArray) => {
  let answer = 0;

  let index = 0;

  while (index < InputArray.length) {
    for (let i = index; i < InputArray.length; i++) {
      const calculatedArea =
        Math.min(InputArray[index], InputArray[i]) * (i - index);
      if (answer < calculatedArea) {
        answer = calculatedArea;
      }
    }
    index++;
  }

  return answer;
};

const Solution2 = (InputArray) => {
  let answer = 0;

  let startIndex = 0;
  let endIndex = InputArray.length - 1;

  while (startIndex < endIndex) {
    const calculatedArea =
      Math.min(InputArray[startIndex], InputArray[endIndex]) *
      (endIndex - startIndex);
    if (answer < calculatedArea) {
      answer = calculatedArea;
      continue;
    }

    if (InputArray[startIndex] < InputArray[endIndex]) {
      startIndex++;
    } else {
      endIndex--;
    }
  }

  return answer;
};

console.log(Solution2([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(Solution2([5, 5, 5, 5, 5, 5])); // 25
console.log(Solution2([0, 99999])); // 0
console.log(Solution2([1, 2, 3, 4, 5, 6, 7, 8])); // 16
