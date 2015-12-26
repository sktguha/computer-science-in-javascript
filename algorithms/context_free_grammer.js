//a simple program for parsing and creating a new sentence out of a given cfg
var store = {
"full" : "<adj> <hero> <verb> <vadj> <villain> | hulk smash little <villain> | <hero> is <adj> | <villain> is <vadj> ",
"hero" : "batman | superman | spiderman | ironman | thor", 
"villain" : "doom | darkseid | joker | loki | thanos",
"verb" : "hits | kicks | punches | hits",
"adj" : "quick | nimble | strong | smart",
"vadj" : "stupid | cunning | evil | mad"
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
parse(store.full, store);
