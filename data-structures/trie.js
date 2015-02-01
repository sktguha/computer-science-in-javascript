//trie data structure in javascript http://en.wikipedia.org/wiki/Trie
//usage 
// var trie = new Trie();
// trie.add("hell");
// trie.add("hello");
// trie.add("hello world");
// trie.check("hell"); returns true
// trie.print(); prints all the strings in the trie
function Trie(){
var rt = {};
return {
add:function (str){
var pt;
pt = rt ; 
for(i in str){
ch = str[i];
if(!pt[ch]){
  pt[ch] = {};
}
pt = pt[ch];
}
pt['end'] = true;
},
check:function(str){
var pt;
pt = rt ; 
for(i in str){
var ch = str[i];
if(!pt[ch]){
  return false;
}
pt = pt[ch];
}
return pt['end']?true:false;
},
print:function print(pre,root){
 pre = pre || "";
 root = root || rt;
 if(root.end) console.log(pre);
 for(i in root){
   pt(pre+i,root[i]);
 }
},
toString:function(){
    return JSON.stringify(rt);
}
}
}
