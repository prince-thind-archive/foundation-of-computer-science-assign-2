function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  for (let i = 0; i < n; i++) {
    swapped = false;
    console.log(`Pass ${i + 1}:`);

    for (let j = 0; j < n - i - 1; j++) {
      console.log(`  Comparing ${arr[j]} and ${arr[j + 1]}`);

      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
        console.log(`  Swapped to: [${arr.join(", ")}]`);
      }
    }

    if (!swapped) break; // If no elements were swapped, the array is sorted and we exit
    console.log(`End of pass ${i + 1}: [${arr.join(", ")}]\n`);
  }
  return arr;
}

let arr = [5, 3, 8, 4, 2];
console.log(`Original array: [${arr.join(", ")}]\n`);
bubbleSort(arr);
console.log(`Sorted array: [${arr.join(", ")}]`);
