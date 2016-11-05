//given an array, find the maximum difference from right to left
//buy low sell high

function maxProfits(arr){

  // zero returns if you can't make any profit

  if (arr.length == 1 || arr.length == 0){
    return 0;
  }

  if (arr.length == 2 && arr[0] == arr[1]){
    return 0;
  }

  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);

  var maxIndex = arr.indexOf(max);
  var minIndex = arr.indexOf(min);

  if (maxIndex >= minIndex){
    return max - min;
  }


  var left =  maxProfits(arr.slice(0, maxIndex +1 )); //0
  var right = maxProfits(arr.slice(minIndex));

  debugger;

  var mid = maxProfits(arr.slice(maxIndex + 1, minIndex));

  return Math.max.apply(null, [left, right, mid]);

}

// console.log(maxProfits([45, 24, 35 , 31 , 40 , 38 , 11]));