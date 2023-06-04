/* Date */
function formatCurrentDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;

    document.getElementById('date').innerHTML = formattedDate;
}

/* even */
function evenNumbers(arr) {
    const result =  arr.filter(num => num % 2 == 0)
    document.getElementById('even').innerHTML = result;
}

/* Array custom sort */
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

/* Bubble sort */
function swap(arr, i, j) {
    if(typeof(i+j) !== 'number') { return };
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}

function bubbleSort(arr) {
    for(let i = 0; i <= arr.length-1; i++) {
        for(let j = 0; j <= arr.length - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}

/* Print Sorted Array */
function printSortedArr(arr) {
    document.getElementById('sort').innerHTML = bubbleSort(arr);
}

/* Calculator using classes */
class Calculator {

    constructor(color) {
        this.color = color;
    }

    getElement(id) {
        let element = document.getElementById(id);
        return element;
    }

    getVal(id) {
        return parseInt(this.getElement(id).value);
    }

    action(e) {
        let val1 = this.getVal('num1');
        let val2 = this.getVal('num2');
        let result = "";

        if(val1 && val2){
            switch(e){
                case 'multiply': result = val1 * val2; break;
                case 'divide': result = val1 / val2; break;
                case 'add': result = val1 + val2; break;
                case 'subtract': result = val1 - val2; break;
            }
        } else {
            alert('Please enter both values')
        }
        this.updateResult(result);
    }

    updateResult(result) {
        this.getElement('result').innerHTML = result;
    }
}

const simpleCalculator = new Calculator();