const insertionSort = (arr) => {

    // determine the length of the input
    let len = arr.length;

    // iterate through the array
    for (var i = 1; i < len; i++) {
        
        // save the current element we are evaluating
        let current = arr[i];

        // determine the index of the previous element
        let j = i - 1;

        // while the index of the previous element is greater than -1 (beginning of the list)
        // and the current element is less than the previous element
        // swap the elements and decrease j by 1
        while ((j > -1) && (current < arr[j])) {
            // swap
            arr[j + 1] = arr[j];
            j--;
        };

        // swap
        arr[j+1] = current;
        
    };
    return arr;
};


let nums = [5,23,54,7,87,2,4,32,8,56,98,43,45,12,21,69,36,25];

console.log(insertionSort(nums));