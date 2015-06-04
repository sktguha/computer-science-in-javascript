//algorithm to find out which possible combinations of 9 digits and symbols + , - or nothing sum to hundred.
//i.e 12-3-4+5-6+7+89 = 100
//to run open new tab, open console (ctrl+shift+j) and paste the code
var mp = ['','+','-'];
for(var i = 0;i< Math.pow(3,8);i++){
     var sym = i.toString(3);
     var exp = "";
     if(sym.length < 8){
         sym = new Array(8-sym.length+1).join('0') + sym;
     }
     for(var j=0;j<=7;j++){
        exp += (j+1) + mp[1*sym[j]];
     }
     exp += '9';
     if(eval(exp) === 100){
         console.log(exp+" = " + eval(exp));
     }
}
