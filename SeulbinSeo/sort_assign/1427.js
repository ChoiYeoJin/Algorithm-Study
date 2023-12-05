const fs = require('fs');
//const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('');
//const input = fs.readFileSync(__dirname + '\\input.txt').toString().trim().split("");//.toString().trim().split("\n");

function heapify(arr, n, i) {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] < arr[smallest]) {
        smallest = left;
    }

    if (right < n && arr[right] < arr[smallest]) {
        smallest = right;
    }
    
    //부모 노드가 자식 노드와 바꼈을 때
    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapify(arr, n, smallest);
    }
}

function heapSort(array) {
    const n = array.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        heapify(array, i, 0);
    }

    return array;
}

const sortedArray = heapSort(input);
console.log(sortedArray.join(""));

