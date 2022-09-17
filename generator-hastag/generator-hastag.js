function generateHashtag (str) {  
  if(str.length === 0 || str.trim().length === 0){
    return false
  }
  
  const result = "#" + str.split(/\s+/).map((s) => s[0].toUpperCase() + s.slice(1)).join("");
  
  if(result.length > 140){
    return false;
  }
  
  return result;
}
