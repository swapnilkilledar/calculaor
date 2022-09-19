function display(val){
   var input=document.getElementById("total")
   if(val=='.'&& input.value.includes('.')){
   }
   else
   { 
   input.value += val
   }
}
  var firstValue=''
  var secondValue=''
  var operation=''
  var clear=''
  var per;
function calc(oper){
   var input=document.getElementById("total")
   firstValue=input.value;
   input.value='';
   operation=oper;    
}
function result(){
   var input=document.getElementById("total")
   secondValue=input.value;
   if(operation =='+'){
      input.value = parseFloat(firstValue) + parseFloat(secondValue); 
   }
   if(operation =='-'){
      input.value=parseFloat(firstValue)-parseFloat(secondValue);
   }
   if(operation =='*'){
      input.value=parseFloat(firstValue)*parseFloat(secondValue);
   }
   if(operation =='/'){
      input.value=parseFloat(firstValue)/parseFloat(secondValue);
   }
   if(operation =='%'){
      input.value=firstValue/100;
   }
      console.log(firstValue)
      console.log(secondValue)
      console.log(operation)
      console.log(input.value)
}  
  function allClear(clear){
   var input=document.getElementById("total")
   input.value='';
   clear=input.value
   console.log(input.value)
}



