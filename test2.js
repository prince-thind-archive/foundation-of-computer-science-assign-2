function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Assume the first element in the unsorted part as the minimum
    let minIndex = i;
    console.log(`Pass ${i + 1}:`);

    // Traverse the unsorted sublist to find the minimum element
    for (let j = i + 1; j < n; j++) {
      console.log(`  Comparing ${arr[j]} and ${arr[minIndex]}`);
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the found minimum element with the first element of the unsorted sublist
    if (minIndex !== i) {
      console.log(`  Swapping ${arr[i]} and ${arr[minIndex]}`);
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; //quick swapping in js
    }
    // Log the array after each pass
    console.log(`End of pass ${i + 1}: [${arr.join(", ")}]\n`);
  }
  return arr;
}
// Example usage:
let arr = [64, 25, 12, 22, 11];
console.log(`Original array: [${arr.join(", ")}]\n`);
selectionSort(arr);
console.log(`Sorted array: [${arr.join(", ")}]`);
