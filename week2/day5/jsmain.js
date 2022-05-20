
//le code ne marche pas 
let a=''
function number(num){
    a+=num
    console.log(a);
    document.getElementByTagname('div'[0]).textcontent=a
}

function operator(operator) {
    a+=operator
    console.log(a);
}


function equal(){
    let result = eval(a)
    console.log(result);
    a=''
    document.getElementByTagname('div'[0]).textcontent=result
}