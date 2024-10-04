

 function sum(a,b,n)
    {
        sum=0;
        for(let i=1; i<n; i++)
        {
            if(i % a == 0 || i % b == 0)
            
                sum +=i;
            
        }
        alert("Sum="+sum)
        
         
    }
    function GetValues()
    {

            num1= document.getElementById("num1").value;
            num2= document.getElementById("num2").value;
            limit= document.getElementById("limit").value;
            limit=document.getElementById("num1").style.display="none";
            limit=document.getElementById("num2").style.display="none";
            limit=document.getElementById("limit").style.display="none";
            limit=document.getElementById("sum").style.display="none";
            limit=document.getElementById("label1").style.display="none";
            limit=document.getElementById("label2").style.display="none";
            limit=document.getElementById("label3").style.display="none";
            sum(num1,num2,limit);

    }

    function GetValues()
    {

            num1= document.getElementById("num1").style.display="block";
            num2= document.getElementById("num2").style.display="block";
            limit= document.getElementById("limit").style.display="block";
            limit=document.getElementById("sum").style.display="block";
            limit=document.getElementById("label1").style.display="block";
            limit=document.getElementById("label2").style.display="block";
            limit=document.getElementById("label3").style.display="block";
            

    }
       
   

 