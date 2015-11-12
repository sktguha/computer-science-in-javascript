//a simple program for parsing and creating a new sentence out of a given cfg
var store = {
"nounphrase" : "<noun> | <adj> <adj> <noun> | super <nounphrase>",
"noun" : "apple | pear | mailman",
"adj" : "smelly | chartreuse | enormous"
};
function parse(str, store){
  str = str.trim();
  if(store[str]){
  str = store[str];
  }
  var tokens = str.split("|");
  var obj = tokens[Math.floor(Math.random()*tokens.length)];
  var words = obj.split(" ");
  var res = "";
  words.forEach(function(w){
    if(w[0] == '<'){
     res += parse(w.substring(1,w.length-1), store)+" ";
    } else {
     res += w.trim()+" ";
    }
  });
 return res.trim();
}
parse(store.nounphrase, store);
