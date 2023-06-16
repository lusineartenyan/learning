let x = [5, 6, 9, 0]
function findIndex(arr, val) {
	let i = 0;
  while(i <= arr.length) {
  	if(arr[i] === val) {
    	return i
    } else{
    	return -1;
    }
  }
}

console.log(findIndex(x, 88));