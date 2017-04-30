var input="";
var ac=false;
$(document).ready(function(){
  $("button").click(function(){
    var value=$(this).attr("value");
    //$(".textarea").val(value);
   // console.log(value);
    if(!ac){
       if(value!="="){
         if(value=="CE"){
            input=input.slice(0,-1);
             $(".textarea").val(input);
         }else if(value=="AC"){
             input="";
             $(".textarea").val(input);
         }else{
             input+=value;
             $(".textarea").val(input);
             }
        }
      else{
        $(".textarea").val(eval(input));
        input="";
      }
    }
  }); 
});