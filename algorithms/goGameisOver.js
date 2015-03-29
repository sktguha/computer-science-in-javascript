//algorithm to check if a go game is over i.e 
//Given a boolean matrix, write a code to find if an island of 0's is completely surrounded by 1's.
var arr = 
[
[1,1,1,1,1],
[1,1,0,0,1],
[1,0,0,0,1],
[1,1,1,1,1]
]
main();
function main(){
    for(var i = 0;i<arr.length;i++){
        for(var j = 0;j<arr[i].length;j++){
            if(arr[i][j] === 0 && check(i,j)){
                console.log("found finishing pos at %d %d",i,j);
                return;
            }
        }
    }
    console.log("No finishing positions found");
}
function check(x,y){
    var st = [];
    var res = true;
    st.push([x,y]);

    while(st.length){
        var ind = st.shift(); //take out from beginning(queue)
        var x = ind[0]; var y = ind[1];
        var neighbours = neighbour(x,y); //neighbours with zeros
         if(neighbours.edge === true){ //that means dead ends reached
                res = false;
            }
         neighbours = neighbours.list;
        for(i in neighbours){
            var el = neighbours[i];
            var x = el[0], y=el[1];
            if(arr[x][y] === 0){
                 st.push([x,y]);
            }
            arr[x][y] = 2;   
            console.table(arr);
        }
    }
    return res;
}
function neighbour(i,j){
 var ad = [];
 ad.push([i-1,j-1]);
 ad.push([i,j-1]);
 ad.push([i+1,j-1]);
 ad.push([i+1,j]);
 ad.push([i+1,j+1]);
 ad.push([i,j+1]);
 ad.push([i-1,j+1]);
 ad.push([i-1,j]);
 var edge = false;
 for(i in ad){
     var e = ad[i];
     var x = e[0], y = e[1];
     if( x >= arr.length || x<0 || y<0 || y >= arr[0].length ){
        edge = true;
        break;
     }        
 }
 ad = ad.filter(function(e){ return arr[e[0]] && arr[e[0]][e[1]]===0;});
  return {
    'list' : ad,
    'edge' : edge  
  }
}
