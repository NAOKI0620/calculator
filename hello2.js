    let result=document.getElementById("result"); 
   
   
    function update(number) 
    {
        document.getElementById("result").value = number
    }

    function append(number) 
    {
        document.getElementById("result").value += number
    }
    
     

    function calc() 
    {
        result.value = new Function("return " + result.value)();
    }
   