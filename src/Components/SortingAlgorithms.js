/* Function to populate and return an array with values in descending order. */
function populate() {
    let items = [];
    const num = 30;
    for (let i = 0; i < num; i++) {
        items[i] = num + 3 - (i + (Math.floor(Math.random()* 3)));
    }
    return items;
}

/* Shuffle using Fisher-Yates algorithm */
function shuffle(items) {
    if (!Array.isArray(items) || items.length < 2) {
        console.log(typeof(items));
        return;
    }

    let shuff_arr = [...items];
    
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        const temp = shuff_arr[i];
        shuff_arr[i] = shuff_arr[j];
        shuff_arr[j] = temp;
    }
    return shuff_arr;
}

/* Selection Sort Algorithm */
function selectionSort(unsorted_items) {
    //  that selection sorts itemsay in-place
    if (!Array.isArray(unsorted_items) || unsorted_items.length < 2) {
        return;
    }
    
    // store length of items
    // i < n-1:
        // min_index = items[i]
        //(j=i+1) < n-1:
            // if items[j] < items[i]: 
                // min_index = j,
        // swap items[i] with items[min_index]

    let items = [...unsorted_items];

    let n = items.length;
    
    let i = 0;
    let j = 0;
    while (i < n-1) {
        let min_index = i;
        j = i+1;
        while (j < n) {
            if (items[j] < items[min_index]) {
                min_index = j;
            }
            j++;
        }
        let temp = items[i];
        items[i] = items[min_index];
        items[min_index] = temp;
        i++;

        // Display current sorting of array in console
        // displaySort(items);

    }
    // console.log(`SORTED: ${items.toString()}`);
    return items;
}

function displaySort(items) {
    if (!Array.isArray(items)) {
        return;
    }
    console.log("===========================");
    for (let i = 0; i < items.length; i++) {
        let rowSize = items[i];
        let str = "";
        for (let j = 0; j < rowSize; j++) {
            str = str + '#';
        }
        console.log(str);
    }
    console.log("===========================");
}

// let arr = populate();
// displaySort(arr);
// arr = shuffle(arr);
// displaySort(arr);
// arr = selectionSort(arr);
// displaySort(arr);

export {populate, shuffle, selectionSort, displaySort};