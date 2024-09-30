

 function sum(a,b,n)
 {
    sum=0;
    for(let i=1; i<n; i++){
        if(i % a == 0 || i % b == 0){
            sum +=i;
        }
    }
        alert("Sum="+sum)
        
         
        }
         function GetValues()
         {

            num1= document.getElementById("num1").value;
            num2= document.getElementById("num2").value;
            limit= document.getElementById("limit").value;
            sum(num1,num2,limit);

         }
 