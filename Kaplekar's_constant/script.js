//
const kaprekarConstant = (value, count) => {
  // TODO (A)... initialize attributes
  const output = document.getElementById("output");
  count = count || 0;
  const arrInitialNumber = isNaN(value)
    ? value.split("")
    : value.toString().split("");
  const intArrayInitialNumber = arrInitialNumber.map(n => parseInt(n));

  // TODO (B)... validate user input
  if (isNaN(value)) {
    output.innerHTML = "Error: Enter a valid number";
    return;
  }
  if (intArrayInitialNumber.length !== 4) {
    output.innerHTML = "Error: Digit must contain four numbers";
    return;
  }
  const hasDuplicates = isHavingDuplicates(intArrayInitialNumber);

  if (count < 1 && hasDuplicates) {
    output.innerHTML = "Error: Try using digits that are not identical";
    return;
  }

  // TODO (C)... Sort ascending order -- X
  const x = intArrayInitialNumber.sort((a, b) => a - b);
  const asc = parseInt(
    x
      .toString()
      .split(",")
      .join("")
  );

  // TODO (D)... Sort descending order -- Y
  const y = intArrayInitialNumber.sort((a, b) => b - a);
  const desc = parseInt(
    y
      .toString()
      .split(",")
      .join("")
  );

  // TODO (E)... Z = (X-Y)
  const res = desc - asc;

  // TODO (F)... if Z === 6174 { c++ } return c
  if (res === 6174) {
    count++;
    output.innerHTML = `It took ${count} iterations to reach Kaprekar's constant.`;
    return;
  }

  // TODO (G)... c++
  count++;
  kaprekarConstant(res, count);
};

const isHavingDuplicates = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === array[i]) {
        return true;
      }
    }
  }
  return false;
};
