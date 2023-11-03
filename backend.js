var d = document.getElementById('display');
var expression = "";

function countOccurrences(string, character) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === character) {
            count++;
        }
    }
    return count;
}

function addToDisplay(a){
    expression += a;
    d.value = expression;
}

function clearall(){
    expression = "";
    d.value = "";
}

function clearrecent(){
    expression = expression.substring(0, expression.length - 1);
    d.value = expression;
}

function brackets(){
    if (countOccurrences(expression, '(') > countOccurrences(expression, ')')){
        expression += ")";
        d.value = expression;
    }
    else if(countOccurrences(expression, '(') < countOccurrences(expression, ')')){
        expression += "(";
        d.value = expression;
    }
    else{
        expression += "(";
        d.value = expression;
    }
}

function calculate(){
    try {
        expression = eval(expression);
        if (!isNaN(expression)) {
            expression = parseFloat(expression).toFixed(2);
        }
        d.value = expression;
        console.log(expression);
    } catch (error) {
        d.value = "Error";
        expression = "";
    }
}

function percent(){
    expression = eval(expression+"/100")
}