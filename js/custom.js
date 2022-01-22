 let count = document.querySelector(".count")
 let inp = document.querySelector(".inp")
 let btn = document.querySelector(".btn")
 
 let start= -1


btn.addEventListener("click", function(){

    function type(){
   
        count.innerHTML += inp.value.charAt(start++)
        if(start == inp.value.length+1){
                   
           count.innerHTML = ""
           start=-1
           
       }
  
 }
     
 let stop = setInterval(function(){
    type()
},100)



})