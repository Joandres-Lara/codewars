export default function pangram(str){
 const all = {}
 let i = 0

 while(str.length > i){
  if(!(str[i].toLowerCase() in all)){
   all[str[i].toLowerCase()] = 1
  }

  if(Object.keys(all).length === 27){
   return true;
  }

  i++;
 }
 return false;
}
