//prefix notation parsing
var st = "+ + * 2 4 6 8";
var st2 = "( + 7 ( * 8 12 ) )"
var st1 = "( ( + + + 7 ( * 8 12 ) ( * 2 ( + 9 4 ) ) 3 ) )";
//var inp = st.split(" ");
var syml = "+-/*";
ev(st1.split(" "));
function ev(src){
  var inp = [];
for(var i=0;i<src.length;i++){
  var ch = src[i];
  if(syml.indexOf(ch)!=-1){
   inp.push(ch); 
  } else if(ch != ')'){
     inp.push(ch);
     var a = inp[inp.length-1];
     var b = inp[inp.length-2];
     var s = inp[inp.length-3];
     if(!isNaN(a) && !isNaN(b) && s && syml.indexOf(s)!=-1){
       inp.pop(); inp.pop(); inp.pop();
       var r = eval(a*1+s+b*1);
       inp.push(r);
     }
  } else if(ch == ')'){
    var ia = [];
    var ch2;
    while(1){
      ch2 = inp.pop();
      if(ch2 == '(') break;
      ia.unshift(ch2);
    }
    var rs = ev(ia);
    console.log("got ",ia,"return ",rs);
    inp.push(rs);
  }
 }
  return inp[0];
}
