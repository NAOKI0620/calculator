 let result=document.getElementById("result"); 
     function append(number){
       if(result.value==0){
         result.value=number;
       }else{
         result.value+=number;
       }
     }
    function update(number){
        result.value = number;
        
    }

    function calc(){
        result.value = new Function("return " + result.value)();
    }
