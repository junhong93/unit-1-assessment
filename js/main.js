

//event listener for the buttons
document.getElementById('plusMee').addEventListener('click', add);
document.getElementById('minusMee').addEventListener('click', subtract);


// function for adding
function add() {
    let a,b,c;
    a = Number(document.getElementById('number_input').value);
    b = Number(document.getElementById('result_number').value);
    c = a+b;
    document.getElementById('result_number').value = c;
}


// function for subtracting
function subtract(){
    let a,b,c;
    a = Number(document.getElementById('number_input').value);
    b = Number(document.getElementById('result_number').value);
    c = b - a;
    document.getElementById('result_number').value = c;

    if (document.getElementById('result_number').value < 0) {
        document.getElementById('result_number').style.color = 'red';
    }
}
