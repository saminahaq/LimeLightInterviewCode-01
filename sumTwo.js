const findTarget = (numbers, size, target) => {
  for (i = 0; i < size - 1; i++) {
    for (j = i + 1; j < size; j++) {
      if (numbers[i] + numbers[j] == target) {
        document.write(
          "Pair with a given sum " +
            target +
            " is (" +
            numbers[i] +
            ", " +
            numbers[j] +
            ")"
        );

        return true;
      }
    }
  }

  return false;
};

let numbers = [2, 7, 11, 15];
let target = 9;
let size = numbers.length;

if (findTarget(numbers, size, target)) {
  document.write("<br/>Valid pair exists");
} else {
  document.write("<br/>No valid pair exists for " + target);
}
