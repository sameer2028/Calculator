function appendValue(value){
     document.getElementById("input").value+=value;
    
}
function clearDisplay(){
    document.getElementById("input").value='';
}
function calculate(value){
    try{
        document.getElementById("input").value=eval(document.getElementById("input").value)
    }
    catch(error){
        document.getElementById("input").value="error";
    }
}