function insert(num){
    document.form.tetview.value=document.form.tetview.value+num
}
function equal(){
    var exp = document.form.tetview.value;
    if(exp){
        document.form.tetview.value= eval(exp)
    }
}
function clean(){
    document.form.tetview.value='';
}
function back(){
    var exp = document.form.tetview.value;
    document.form.tetview.value = exp.substring(0, exp.length-1);
}