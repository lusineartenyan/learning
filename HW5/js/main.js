/* Array sort */
function minIndex(arr) {
    let min = arr[0];
    let index = 0;

    for(let i = 1; i <= arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
            index = i;
        }
    }
    
    return index;
}

function sort(arr) {
    if(!arr || arr.length === 0) return;
    for(let i = 0; i <= arr.length-1;  i++) {
        let minI = minIndex(arr.slice(i, arr.length)) + i
        let tmp = arr[i];
        arr[i] = arr[minI];
        arr[minI] = tmp;
    }

    return arr;
}

function printSortedArr(arr) {
    document.getElementById('sort').innerHTML = sort(arr);
}

/* Calculator using classes */

class Calculator {
    constructor(val1, val2, result) {
        this.val1 = val1;
        this.val2 = val2;
        this.result = result
    }

    multiply() {
        console.log(this.val1*this.val2)
    }
    divide() {
        console.log(this.val1/this,this.val2)
    }
}

class SimpleCalculator extends Calculator {
    constructor(type) {
        super();
        this.type = type;
    };
}


