export default function solution(roman){
 const values = {
  i: 1, 
  v: 5,
  x: 10, 
  l: 50,
  c: 100,
  d: 5000,
  "": 0
 };

 let sum = 0;
 for(let 0; i < roman.length; i += 2){
  const actual = roman[i].toLowerCase();
  const next = (roman[i+1] || "").toLowerCase();

  if(values[actual] >= values[next]){
   sum += values[actual] + values[next];
  }else{
   sum += values[actual] - values[next];
  }
 }
}
