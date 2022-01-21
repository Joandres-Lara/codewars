Array.prototype.groups = function(...groups_length){
 let last = 0;
 const arr_groups = [];
 for(let i = 0; i < groups_length.length; i++){
  arr_groups.push(this.slice(last, last += groups_length[i]));
 }
 return arr_groups;
}

export default function phoneTemplate(nums){
 const [pharentesis_group, before_hyphen, after_hyphen] = nums.groups(3, 3, 4);
 return (
  "(a) b-c"
   .replace("a", pharentesis_group.join(""))
   .replace("b", before_hyphen.join(""))
   .replace("c", after_hyphen.join(""))
 );
}
