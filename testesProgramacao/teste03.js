function ABCheck(str) { 

    console.log(str.split(""))
    var array = str.split("");
    var check = false;
   
    array.forEach(value => {
      if(value == 'a'){
          if(array[array.indexOf(value) + 4] == 'b'){
              check = true
          }
          array = array.slice(array.indexOf(value)+1);
      }
    })
    console.log('depoiss ' + array)
  
    return check; 
  
}
  
console.log(ABCheck("Laura sobs"));