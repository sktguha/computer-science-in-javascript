//finds sub matrix with largest sum in 2-d array, using a modification of max sum algorithm for 1-D array
var arr = 
[
[2, 2,  8, 3,-9],
[5, 1, -1, 7, 2],
[6, 8, -11, 2,12],
[8,-6,-2,  4, 3]
]
//global max, to store values. i = row1 , j = row2(exclusive), k1 = col1 , k2 = col2(inclusive), v = sum
var gmax = {'i':0,'j':0,'k1':0,'k2':0,'v':0};
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
        var cumsum = 0;
        var max = 0;
        var maxk1 = 0;
        var maxk2 = 0;
        var prevk = 0;
        for(var k=0;k<arr.length;k++){
           var colsum = findsum(arr, k,i,j);   
           if(colsum<0){
               if(cumsum > max){
                 max = cumsum;
                 maxk2 = k-1;
                 maxk1 = prevk;
               }
             cumsum = 0;
             startk = k+1;
           } else {
               cumsum += colsum;
               if(cumsum > max){
                 max = cumsum;
                 maxk2 = k;
                 maxk1 = prevk;
               }
           }
        }
        if(max > gmax.v){
        gmax.i = i; gmax.j = j; gmax.k1 = maxk1; gmax.k2 = maxk2; gmax.v = max;
        }
    }
}

function findsum(arr,k,i,j){
    var sum = 0;
    for(var ct = i;ct<j;ct++){
        sum += arr[ct][k];
    }
    return sum;
}

//only for display
console.clear();
console.log("original array");
console.table(arr);
console.log("sub array with max sum = %d row1 = %d, row2(exclusive) = %d, col1 = %d , col2(inclusive) = %d",
gmax.v, gmax.i, gmax.j, gmax.k1, gmax.k2);
var sarr = [];
for(var i = gmax.i;i<gmax.j;i++){
  sarr[i] = [];
  for(var j = gmax.k1;j<=gmax.k2;j++){
    sarr[i][j] = arr[i][j];
  }
}
console.table(sarr);
