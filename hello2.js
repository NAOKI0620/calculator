 let result=document.getElementById("result"); 
     function append(number){
        result.value += number;
       
    }
    function keisan(number){
         result.value=Number(result.value);
         result.value += number;
    }

    function update(number){
        result.value = number;
        
    }

    function calc(){
        result.value = new Function("return " + result.value)();
    }

